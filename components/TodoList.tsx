"use client";

import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {

    const [todos, setTodos] = useState([])
  return (
    <div className='space-y-2'>
        <TodoItem key={1} id={1} title="Todo title 1" completed={false} />
    </div>
  )
}

export default TodoList