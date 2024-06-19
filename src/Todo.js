// src/Todo.js
import React from 'react';

function Todo({ todo, index, setTodos, todos }) {
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

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={toggleComplete}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default Todo;
