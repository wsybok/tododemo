import React from 'react';

function TodoItem({ todo, index, toggleComplete }) {
  return (
    <div
      style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      onClick={() => toggleComplete(index)}
    >
      {todo.text}
    </div>
  );
}

export default TodoItem;
