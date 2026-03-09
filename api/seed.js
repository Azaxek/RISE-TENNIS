process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import pg from 'pg';
const { Pool } = pg;

let pool;

function getPool() {
  if (!pool) {
    const connStr = process.env.POSTGRES_URL || process.env.DATABASE_URL || '';
    pool = new Pool({
      connectionString: connStr,
      ssl: connStr.includes('sslmode=') ? undefined : { rejectUnauthorized: false }
    });
  }
  return pool;
}

export default async function handler(req, res) {
  const connStr = process.env.POSTGRES_URL || process.env.DATABASE_URL || '';
  const hasUrl = !!connStr;

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
    // Try direct connection without Pool first for diagnostics
    const client = new pg.Client({
      connectionString: connStr,
      ssl: connStr.includes('sslmode=') ? undefined : { rejectUnauthorized: false }
    });
    await client.connect();

    await client.query(`CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, title TEXT NOT NULL, excerpt TEXT DEFAULT '', content TEXT NOT NULL, image_url TEXT DEFAULT '', author TEXT DEFAULT 'RISE Tennis', date DATE DEFAULT CURRENT_DATE, published INTEGER DEFAULT 1)`);
    await client.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL)`);
    const { rows } = await client.query(`SELECT id FROM users WHERE username = 'admin'`);
    if (rows.length === 0) {
      await client.query(`INSERT INTO users (username, password) VALUES ('admin', 'risetennis2026')`);
    }

    await client.end();

    res.json({
      success: true,
      message: 'Database initialized! Tables created and default admin user seeded.',
      admin: { username: 'admin', password: 'risetennis2026' },
      connStringPrefix: connStr.substring(0, 30) + '...',
      envVars: Object.keys(process.env).filter(k =>
        k.includes('POSTGRES') || k.includes('SUPABASE') || k.includes('DATABASE')
      )
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Database error: ' + error.message,
      connStringPrefix: connStr.substring(0, 30) + '...',
      envVars: Object.keys(process.env).filter(k =>
        k.includes('POSTGRES') || k.includes('SUPABASE') || k.includes('DATABASE')
      )
    });
  }
}
