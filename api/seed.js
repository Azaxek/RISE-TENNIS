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
  const hasUrl = !!(process.env.POSTGRES_URL || process.env.DATABASE_URL);

  if (!hasUrl) {
    return res.status(500).json({
      success: false,
      message: 'No POSTGRES_URL or DATABASE_URL found.',
      availableEnvVars: Object.keys(process.env).filter(k =>
        k.includes('POSTGRES') || k.includes('SUPABASE') || k.includes('DATABASE')
      )
    });
  }

  try {
    const client = await getPool().connect();
    try {
      await client.query(`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`);
      await client.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`);
      const { rows } = await client.query(`SELECT id FROM users WHERE username = 'admin'`);
      if (rows.length === 0) {
        await client.query(`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`);
      }
    } finally {
      client.release();
    }

    res.json({
      success: true,
      message: 'Database initialized! Tables created and default admin user seeded.',
      admin: { username: 'admin', password: 'risetennis2026' }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database error: ' + error.message });
  }
}
