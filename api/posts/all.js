import { sql } from '@vercel/postgres';
import { ensureTables } from '../_db.js';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await ensureTables();

    try {
        const { rows } = await sql`SELECT * FROM posts ORDER BY id DESC`;
        return res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: 'Database error' });
    }
}
