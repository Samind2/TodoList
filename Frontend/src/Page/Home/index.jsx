import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import TodoListService from '../../service/todoList.service';
import './index.css';

const Index = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchTodoLists();
  }, []);

  const fetchTodoLists = async () => {
    try {
      const response = await TodoListService.getAllTodos();
      setTodoLists(response.data);
    } catch (error) {
      console.error('Error fetching todo lists:', error);
    }
  };

  const handleSaveTodo = async () => {
    if (newTitle.trim() === '') return;
    try {
      await TodoListService.createTodo(newTitle);
      setNewTitle('');
      fetchTodoLists();
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  };

  const handleToggleCompleted = async (todo) => {
    try {
      await TodoListService.updateTodo(todo.id, {
        title: todo.title,
        completed: !todo.completed,
      });
      fetchTodoLists();
    } catch (error) {
      console.error('Error toggling completed:', error);
    }
  };

  const handleUpdateTitle = async (todo, newTitle) => {
    try {
      await TodoListService.updateTodo(todo.id, {
        title: newTitle,
        completed: todo.completed,
      });
      fetchTodoLists();
    } catch (error) {
      console.error('Error updating title:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await TodoListService.deleteTodo(id);
      fetchTodoLists();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to Todo List App</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="กรอกชื่อ Todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSaveTodo()}
        />
        <button onClick={handleSaveTodo}>Add</button>
      </div>

      <div className="todo-list">
        {todoLists.map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            created_at={todo.created_at}
            onToggle={() => handleToggleCompleted(todo)}
            onUpdate={(newTitle) => handleUpdateTitle(todo, newTitle)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
