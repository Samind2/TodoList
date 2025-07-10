// components/Card.jsx
import React, { useState } from 'react';
import '../Page/Home/index.css'; // Import the CSS styles

const Card = ({ title, completed, created_at, onToggle, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleSave = () => {
        if (newTitle.trim() === '') return;
        onUpdate(newTitle);
        setIsEditing(false);
    };
    return (
        <div className="card bg-base-100 shadow-md w-80 p-4">
            <div className="flex items-center gap-3 mb-2">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={onToggle}
                    className="checkbox checkbox-primary"
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="input input-sm input-bordered"
                    />
                ) : (
                    <h2 className={`card-title ${completed ? 'line-through text-gray-400' : ''}`}>
                        {title}
                    </h2>
                )}
            </div>

            <p className="text-sm text-gray-500 mb-2">
                Created at: {new Date(created_at).toLocaleString()}
            </p>

            <div className="flex justify-end gap-2">
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>
                            Save
                        </button>
                        <button onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button onClick={onDelete}>
                            Delete
                        </button>
                    </>

                )}
            </div>
        </div>
    );
};

export default Card;
