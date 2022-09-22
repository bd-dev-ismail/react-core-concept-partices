import React from 'react';
import { useEffect, useState } from "react";
import TodoItem from '../TodoItem/TodoItem';
import './Todos.css'
const Todos = () => {
    
  const [todos, setTodos] = useState([]);
  //effects use for fetch
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
    return (
      <div>
        <h1>Some Todos from Json Placeholder</h1>
        <div className='todo'>
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </div>
      </div>
    );
};

export default Todos;