// src/tests/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('adds a new todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('filters completed todos', () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'First Todo' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Second Todo' } });
  fireEvent.click(addButton);

  const completeButtons = screen.getAllByText(/complete/i);
  fireEvent.click(completeButtons[0]);

  const completedFilter = screen.getByText(/completed/i);
  fireEvent.click(completedFilter);

  expect(screen.getByText('First Todo')).toBeInTheDocument();
  expect(screen.queryByText('Second Todo')).toBeNull();
});
