import React, { useRef } from 'react'

export default function AddTodo({addTodo}) {

    const taskRef = useRef()

    const handleClick =(evt) => {
        // console.log(taskRef.current.value)
        const value = taskRef.current.value
        addTodo(value)
        taskRef.current.value = ''
        taskRef.current.focus()

    }
  return (
    <div  className='container border my-1 p-2 d-flex justify-content-between'>
        <input ref={taskRef} type="text"  /> <button onClick={handleClick} className='btn btn-outline-success'>Ajouter</button>
    </div>
  )
}
