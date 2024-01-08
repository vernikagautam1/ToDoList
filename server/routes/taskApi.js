const express = require('express');
const router = express.Router();
const Task = require('../database/todo.js');

//getting all task
router.get('/gettingdata', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//adding task
router.post('/addingdata', async (req, res) => {
 
  try {
		const task = new Task(req.body);
		console.log("taskk under adding",task)
    const savedTask = await task.save();
		console.log("taskk under adding after mongo",task)

    res.json(savedTask);
  } catch (error) {
		console.log("adding data caych")
    res.status(500).json({ error: error.message });
  }
});

//deleting a task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
