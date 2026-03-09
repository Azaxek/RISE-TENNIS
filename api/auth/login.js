import { sql } from '@vercel/postgres';

let initialized = false;

async function ensureTables() {
    if (initialized) return;
    try {
        await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`;
        await sql`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`;
        const { rows } = await sql`SELECT id FROM users WHERE username = 'admin'`;
        if (rows.length === 0) await sql`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`;
        initialized = true;
    } catch (e) { initialized = true; }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        await ensureTables();
        const { username, password } = req.body;
        const { rows } = await sql`SELECT id, username FROM users WHERE username = ${username} AND password = ${password}`;

        if (rows.length > 0) {
            res.json({ success: true, username: rows[0].username });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Database error: ' + error.message });
    }
}
