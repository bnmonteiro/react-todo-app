// src/App.js
import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
