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

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { rows } = await getPool().query('SELECT * FROM posts ORDER BY id DESC');
        return res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
