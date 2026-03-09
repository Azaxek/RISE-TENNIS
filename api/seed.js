import { ensureTables } from './_db.js';

export default async function handler(req, res) {
  try {
    await ensureTables();
    res.json({
      success: true,
      message: 'Database initialized! Tables created and default admin user seeded.',
      admin: { username: 'admin', password: 'risetennis2026' }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Database error: ' + error.message });
  }
}
