import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // Check environment
  const hasPostgresUrl = !!process.env.POSTGRES_URL;
  const hasPostgresHost = !!process.env.POSTGRES_HOST;

  if (!hasPostgresUrl && !hasPostgresHost) {
    return res.status(500).json({
      success: false,
      message: 'No POSTGRES_URL or POSTGRES_HOST found. Make sure the Supabase integration is connected and env vars are synced.',
      availableEnvVars: Object.keys(process.env).filter(k =>
        k.includes('POSTGRES') || k.includes('SUPABASE') || k.includes('DATABASE')
      )
    });
  }

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

    res.json({
      success: true,
      message: 'Database initialized! Tables created and default admin user seeded.',
      admin: { username: 'admin', password: 'risetennis2026' },
      env: { hasPostgresUrl, hasPostgresHost }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database error: ' + error.message,
      env: { hasPostgresUrl, hasPostgresHost }
    });
  }
}
