// routes/todo.routes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

// RESTful Routes
router.get('/', todoController.getAllTodos);         // GET /api/todos
router.get('/:id', todoController.getTodoById);      // GET /api/todos/:id
router.post('/', todoController.createTodo);         // POST /api/todos
router.put('/:id', todoController.updateTodo);       // PUT /api/todos/:id
router.delete('/:id', todoController.deleteTodo);    // DELETE /api/todos/:id

module.exports = router;
