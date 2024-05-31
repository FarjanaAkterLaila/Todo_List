import React, { useState } from 'react';
import './App.css';
import './List.css';
import { MdDelete } from "react-icons/md";

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
    
    setIsEditing(false);
    setValue(todo[index].text);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, idx) => idx !== index);
    setTodo(updatedTodo);
  };
  const handleComDelete = (index1) => {
    const updatedTodo = todo.filter((_, idx) => idx !== index1);
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
            <li key={index} className={item.completed ? 'completed' : ''}>
              <input 
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(index)}
              />
              {isEditing && currentIndex === index ? (
                <input 
                  type="text" 
                  value={value} 
                  onChange={e => setValue(e.target.value)} 
                />
              ) : (
                <span>{item.text}</span>
              )}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}><MdDelete style={{ fontSize: '20px' }} /></button>
            </li>
          ))}
        </ul>
      </div>
      <div className="completed-section">
        <h2>COMPLETED</h2>
        <ul>
          {todo.filter(item => item.completed).map((item) => (
            <li  className={item.completed ? 'completed' : ''}>
              <input 
                type="checkbox"
                checked={item.completed}
                // onChange={() => toggleComplete(index1)}
              />
              <span>{item.text}</span>
              <button >Edit</button>
              <button >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
