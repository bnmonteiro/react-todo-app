// src/Todo.js
import React, { useState } from 'react';

function Todo({ todo, index, setTodos, todos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const saveEdit = () => {
    const newTodos = [...todos];
    newTodos[index].text = editValue;
    setTodos(newTodos);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="btn btn-success" onClick={saveEdit}>Save</button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center w-100">
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div className="btn-group">
            <button className="btn btn-warning" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-info" onClick={toggleComplete}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Todo;
