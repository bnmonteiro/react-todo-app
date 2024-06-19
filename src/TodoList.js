// src/TodoList.js
import React, { useState, useEffect } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  return (
    <div className="mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
      </div>
      <div className="btn-group mb-3">
        <button className="btn btn-outline-secondary" onClick={() => setFilter('all')}>All</button>
        <button className="btn btn-outline-secondary" onClick={() => setFilter('completed')}>Completed</button>
        <button className="btn btn-outline-secondary" onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
      <ul className="list-group">
        {getFilteredTodos().map((todo, index) => (
          <Todo key={index} todo={todo} index={index} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
