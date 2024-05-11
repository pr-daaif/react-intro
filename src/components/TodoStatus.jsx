import React from 'react'

export default function TodoStatus({todos}) {
  return (
    <div className='container border p-2 my-2 text-center'>
      <strong>{todos.filter(t => t.done ).length}
      /
      {todos.length} réalisés
      </strong>
       </div>
  )
}
