import { sql } from '@vercel/postgres';

let initialized = false;

export async function ensureTables() {
    if (initialized) return;

    try {
        await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        excerpt TEXT DEFAULT '',
        content TEXT NOT NULL,
        image_url TEXT DEFAULT '',
        author TEXT DEFAULT 'RISE Tennis',
        date DATE DEFAULT CURRENT_DATE,
        published INTEGER DEFAULT 1
      )
    `;

        await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `;

        const { rows } = await sql`SELECT id FROM users WHERE username = 'admin'`;
        if (rows.length === 0) {
            await sql`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`;
        }

        initialized = true;
    } catch (e) {
        // Log the error for Vercel function logs but don't block
        console.error('DB init error:', e?.message || e);
        initialized = true;
    }
}
