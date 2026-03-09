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
    try {
        await ensureTables();
        const { id } = req.query;

        if (req.method === 'DELETE') {
            await sql`DELETE FROM posts WHERE id = ${id}`;
            return res.json({ message: 'Post deleted.' });
        }

        if (req.method === 'GET') {
            const { rows } = await sql`SELECT * FROM posts WHERE id = ${id}`;
            if (rows.length === 0) return res.status(404).json({ message: 'Post not found' });
            return res.json(rows[0]);
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
