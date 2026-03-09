import { sql } from '@vercel/postgres';

let initialized = false;

async function ensureTables() {
    if (initialized) return;
    try {
        await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`;
        await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`;
        const { rows } = await sql`SELECT id FROM users WHERE username = 'admin'`;
        if (rows.length === 0) await sql`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`;
        initialized = true;
    } catch (e) { initialized = true; }
}

export default async function handler(req, res) {
    try {
        await ensureTables();

        if (req.method === 'GET') {
            const { rows } = await sql`SELECT * FROM posts WHERE published = 1 ORDER BY id DESC`;
            return res.json(rows);
        }

        if (req.method === 'POST') {
            const { title, excerpt, content, imageUrl, author } = req.body;
            if (!title || !content) {
                return res.status(400).json({ message: 'Title and content are required.' });
            }
            const { rows } = await sql`
        INSERT INTO posts (title, excerpt, content, image_url, author)
        VALUES (${title}, ${excerpt || ''}, ${content}, ${imageUrl || ''}, ${author || 'RISE Tennis'})
        RETURNING id
      `;
            return res.status(201).json({ id: rows[0].id, message: 'Post created successfully.' });
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
