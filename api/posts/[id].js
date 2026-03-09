import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'DELETE') {
        try {
            await sql`DELETE FROM posts WHERE id = ${id}`;
            return res.json({ message: 'Post deleted.' });
        } catch (error) {
            return res.status(500).json({ message: 'Database error' });
        }
    }

    if (req.method === 'GET') {
        try {
            const { rows } = await sql`SELECT * FROM posts WHERE id = ${id}`;
            if (rows.length === 0) {
                return res.status(404).json({ message: 'Post not found' });
            }
            return res.json(rows[0]);
        } catch (error) {
            return res.status(500).json({ message: 'Database error' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
