import { sql } from '@vercel/postgres';
import { ensureTables } from '../_db.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    await ensureTables();

    const { username, password } = req.body;

    try {
        const { rows } = await sql`
      SELECT id, username FROM users WHERE username = ${username} AND password = ${password}
    `;

        if (rows.length > 0) {
            res.json({ success: true, username: rows[0].username });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Database error' });
    }
}
