import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        text: input,
        dueDate: dueDate,
        priority: priority,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
      setDueDate('');
      setPriority('Low');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-400 to-cyan-500 via-blue-500 p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
          className="p-2 border rounded mr-2"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded mr-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`p-2 mb-2 border rounded flex justify-between items-center ${
              todo.completed ? 'bg-gray-100' : ''
            }`}
          >
            <div>
              <span
                onClick={() => toggleTodo(index)}
                className={`cursor-pointer ${
                  todo.completed ? 'line-through' : ''
                }`}
              >
                {todo.text}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Due: {todo.dueDate}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Priority: {todo.priority}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(index)}
              className="p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;