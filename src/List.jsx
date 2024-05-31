import React, { useState } from 'react';
import './App.css';
import './List.css';

const List = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = () => {
    if (value !== '') {
      if (isEditing) {
        const updatedTodo = todo.map((item, index) => 
          index === currentIndex ? { ...item, text: value } : item
        );
        setTodo(updatedTodo);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setTodo([...todo, { text: value, completed: false }]);
      }
      setValue('');
    }
  };

  const handleEdit = (index) => {
    

  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, idx) => idx !== index);
    setTodo(updatedTodo);
  };


  const toggleComplete = (index) => {
    const updatedTodo = todo.map((item, idx) => 
      idx === index ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <div className="add-item">
        <h2>ADD ITEM</h2>
        <input 
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleClick}>
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="todo-section">
        <h2>TODO</h2>
        <ul>
          {todo.filter(item => !item.completed).map((item, index) => (
            <li key={index} >
              
               
             
                <span>{item.text}</span>
              
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default List;
