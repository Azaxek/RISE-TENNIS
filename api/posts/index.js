import pg from 'pg';
const { Pool } = pg;

let pool;

function getPool() {
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
    }
    return pool;
}

let initialized = false;

async function ensureTables() {
    if (initialized) return;
    const client = await getPool().connect();
    try {
        await client.query(`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`);
        await client.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`);
        const { rows } = await client.query(`SELECT id FROM users WHERE username = 'admin'`);
        if (rows.length === 0) {
            await client.query(`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`);
        }
        initialized = true;
    } catch (e) {
        console.error('DB init error:', e.message);
        initialized = true;
    } finally {
        client.release();
    }
}

export default async function handler(req, res) {
    try {
        await ensureTables();

        if (req.method === 'GET') {
            const { rows } = await getPool().query('SELECT * FROM posts WHERE published = 1 ORDER BY id DESC');
            return res.json(rows);
        }

        if (req.method === 'POST') {
            const { title, excerpt, content, imageUrl, author } = req.body;
            if (!title || !content) {
                return res.status(400).json({ message: 'Title and content are required.' });
            }
            const { rows } = await getPool().query(
                'INSERT INTO posts (title, excerpt, content, image_url, author) VALUES ($1, $2, $3, $4, $5) RETURNING id',
                [title, excerpt || '', content, imageUrl || '', author || 'RISE Tennis']
            );
            return res.status(201).json({ id: rows[0].id, message: 'Post created successfully.' });
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
