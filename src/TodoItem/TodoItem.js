import React from 'react';
import './TodoItem.css'
const TodoItem = ({todo}) => {
    const {title, completed} = todo; 
    return (
      <div className='todo-items'>
        <h3>{title}</h3>
        <p>{completed? 'True' : 'False'}</p>
      </div>
    );
};

export default TodoItem;