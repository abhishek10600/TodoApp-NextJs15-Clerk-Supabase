"use client";

import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { addTodo } from '@/actions/todos';

const TodoInput = () => {

    const [title, setTitle] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!title.trim()){
        return;
      }
      try {
        // const res = await addTodo(title);
        // console.log(res);
        // setTitle("");
      } catch (error) {
        
      }
    }
  return (
    <form className='flex gap-2 mb-4' onSubmit={handleSubmit}>
        <Input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter the task" />
        <Button type="submit">Create</Button>
    </form>
  )
}

export default TodoInput