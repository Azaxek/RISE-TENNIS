import { sql } from '@vercel/postgres';

let initialized = false;

async function ensureTables() {
    if (initialized) return;
    try {
        await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`;
        initialized = true;
    } catch (e) { initialized = true; }
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await ensureTables();
        const { rows } = await sql`SELECT * FROM posts ORDER BY id DESC`;
        return res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
