const Database = require('better-sqlite3');
const db = new Database('./tasks.db');

db.exec(`
	CREATE TABLE IF NOT EXISTS tasks (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	description TEXT,
	status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed'))
	)
`);

module.exports = db;