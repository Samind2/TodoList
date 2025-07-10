// controllers/todo.controller.js
const Todo = require('../models/todo.model');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const newTodo = await Todo.create(title);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTodo = await Todo.update(id, title, completed);
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.delete(id);
    if (!deletedTodo) return res.status(404).json({ error: 'Todo not found' });
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
