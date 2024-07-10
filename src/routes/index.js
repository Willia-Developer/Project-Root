const express = require('express');
const userController = require('/src/controllers/taskcontroller');
const taskController = require('/src/controllers/taskController');
const auth = require('../middlewares/auth');

const router = express.Router();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Task routes
router.post('/tasks', auth, taskController.createTask);
router.get('/tasks', auth, taskController.getTasks);
router.put('/tasks/:id', auth, taskController.updateTask);
router.delete('/tasks/:id', auth, taskController.deleteTask);

module.exports = router;
