import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import TodoListService from '../../service/todoList.service';

const Index = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  const fetchTodoLists = async () => {
    try {
      const response = await TodoListService.getAllTodos();
      setTodoLists(response.data);
    } catch (error) {
      console.error('Error fetching todo lists:', error);
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

  const handleSaveTodo = async () => {
    if (newTitle.trim() === '') return; // เช็คไม่ให้ชื่อว่าง
    try {
      await TodoListService.createTodo(newTitle);
      setNewTitle(''); // เคลียร์ input หลังเพิ่ม
      fetchTodoLists();
    } catch (error) {
      console.error('Error saving todo:', error);
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

  useEffect(() => {
    fetchTodoLists();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-5">Welcome to Todo List App</h1>

      {/* ช่องกรอกและปุ่มเพิ่ม Todo */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          className="input input-bordered flex-grow"
          placeholder="กรอกชื่อ Todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSaveTodo(); }}
        />
        <button className="btn btn-primary" onClick={handleSaveTodo}>
          Add
        </button>
      </div>

      {/* แสดง Todo List */}
      <div className="flex justify-center flex-wrap gap-4">
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