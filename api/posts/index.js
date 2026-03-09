import { sql } from '@vercel/postgres';
import { ensureTables } from '../_db.js';

export default async function handler(req, res) {
    await ensureTables();

    if (req.method === 'GET') {
        try {
            const { rows } = await sql`
        SELECT * FROM posts WHERE published = 1 ORDER BY id DESC
      `;
            return res.json(rows);
        } catch (error) {
            return res.status(500).json({ message: 'Database error' });
        }
    }

    if (req.method === 'POST') {
        const { title, excerpt, content, imageUrl, author } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required.' });
        }

        try {
            const { rows } = await sql`
        INSERT INTO posts (title, excerpt, content, image_url, author)
        VALUES (${title}, ${excerpt || ''}, ${content}, ${imageUrl || ''}, ${author || 'RISE Tennis'})
        RETURNING id
      `;
            return res.status(201).json({ id: rows[0].id, message: 'Post created successfully.' });
        } catch (error) {
            return res.status(500).json({ message: 'Database error' });
        }
    }

    return res.status(405).json({ message: 'Method not allowed' });
}
