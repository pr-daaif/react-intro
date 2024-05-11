import React from 'react'

export default function ({todos}) {
  return (
    <pre style={{fontSize: '11px', fontWeight: 'bold'}}>{JSON.stringify(todos, null, 3)}</pre>
  )
}
