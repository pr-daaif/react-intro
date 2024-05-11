import React, { useState } from "react";

export default function Todo(props) {
    const [todo, setTodo] = useState(props.todo)
    const handleChange = (evt) => {
        todo.done = !todo.done
        setTodo(todo)
        props.updateTodo(todo)
    }
    const handleClick =(evt) => {
        todo.done = !todo.done
        setTodo(todo)
        props.updateTodo(todo)
    }
  return (
    <div 
    onClick={handleClick}
    style={{cursor: 'pointer'}}
    className="container border m-1 p-1 d-flex justify-content-between">
     <span style={{textDecorationLine: todo.done ? 'line-through' : ''}}>{todo.task}</span> 
      <input type="checkbox" 
      className="form-check-input" 
      onChange={handleChange}
    //   checked={todo.done}
      defaultChecked={todo.done}
       />
    </div>
  );
}
