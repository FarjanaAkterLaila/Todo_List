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
     
    </div>
  );
};

export default List;
