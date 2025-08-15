const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
	console.log("app listen on http://localhost:3000");
});

app.get('/tasks', (req, res) => {
	try {
		const result = db.prepare(`SELECT * FROM tasks`).all();
		res.status(200).json(result);
	} catch (err) {
		console.error("Database error: ", err.message);
		res.status(500).json({ error: "Failed to retrieve tasks" });
	}
});

app.post('/tasks', (req, res) => {
	const {title, description, status} = req.body;
	if (!title)
		return res.status(400).json({ error: "Task title cannot be empty" });
	if (status !== 'pending' && status !== 'completed')
		return res.status(400).json({ error: "Invalid status" });

	try {
		db.prepare(`INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`).run(title, description, status);
		res.status(201).json({ message: "Task successfully added" });
	} catch (err) {
		console.error("Database error: ", err.message);
		res.status(500).json({ error: "Failed to add task" });
	}
});

app.put('/tasks/:id', (req, res) => {
	const {title, description, status} = req.body;
	const {id} = req.params;
	if (!title)
		return res.status(400).json({ error: "Task title cannot be empty" });
	if (status !== 'pending' && status !== 'completed')
		return res.status(400).json({ error: "Invalid status" });

	try {
		const result = db.prepare(`UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?`).run(title, description, status, id);
		if (result.changes === 0)
			return res.status(404).json({ error: "Task not found" });
		res.status(200).json({ message: "Task successfully updated" });	
	} catch (err) {
		console.error("Database error: ", err.message);
		res.status(500).json({ error: "Failed to update task" });
	}
});


app.delete('/tasks/:id', (req, res) => {
	const {id} = req.params;
	try {
		const result = db.prepare(`DELETE FROM tasks WHERE id = ?`).run(id);
		if (result.changes === 0)
			return res.status(404).json({ error: "Task not found" });
		res.status(200).json({ message: "Task successfully deleted" });
	} catch (err) {
		console.error("Database error: ", err.message);
		res.status(500).json({ error: "Failed to delete task" });
	}
});