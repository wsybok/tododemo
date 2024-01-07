import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== '') {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
