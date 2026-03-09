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
    try {
        const { id } = req.query;

        if (req.method === 'DELETE') {
            await getPool().query('DELETE FROM posts WHERE id = $1', [id]);
            return res.json({ message: 'Post deleted.' });
        }

        if (req.method === 'GET') {
            const { rows } = await getPool().query('SELECT * FROM posts WHERE id = $1', [id]);
            if (rows.length === 0) return res.status(404).json({ message: 'Post not found' });
            return res.json(rows[0]);
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        return res.status(500).json({ message: 'Database error: ' + error.message });
    }
}
