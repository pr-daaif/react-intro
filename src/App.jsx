import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";
import Debug from "./Debug";

 const initialTodos = [
    {id:1, task: "faire la cuisine", done: true},
    {id:2, task: "faire la vaisselle", done: false},
    {id:3, task: "faire le ménage", done: true},
    {id:4, task: "laver le linge", done: false},
    {id:5, task: "faire la paix", done: false},
]



export default function App() {
    const [todos, setTodos] = useState(initialTodos.sort((t1,t2)=> t1.done - t2.done))
    const updateTodo = (todo) => {
        const index = todos.findIndex(t => t.id == todo.id)
        todos[index] = todo
        todos.sort((t1,t2) => t1.done - t2.done)
        setTodos([...todos])
    }
    const addTodo = (task) => {
        const todo = {
            id: todos.length + 1,
            task,
            done: false
        } 
        todos.unshift(todo)
        setTodos([...todos])
    }
  return (

    <>
    <div className="container border mt-3">
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} updateTodo={updateTodo} />
      <TodoStatus todos={todos} />
    </div>
    <div className="container">
        <Debug todos={todos}/>
    </div>
    </>
  );
}
