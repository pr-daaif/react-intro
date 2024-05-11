import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, updateTodo}) {
  return (
    <div className='container border p-2'>
        {todos.map(todo => <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />)}
    </div>
  )
}
