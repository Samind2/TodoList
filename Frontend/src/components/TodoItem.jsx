// TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between border p-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <span className={todo.completed ? 'line-through text-gray-400' : ''}>
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">
        ลบ
      </button>
    </div>
  );
};

export default TodoItem;
