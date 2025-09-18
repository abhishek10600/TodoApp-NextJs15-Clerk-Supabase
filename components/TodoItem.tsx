import React, { useTransition } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type TodoType = {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem = ({id, title, completed}: TodoType) => {
    const [isPending, starTransition] = useTransition();
  return (
    <div className='flex items-center justify-between border rounded p-2'>
        <label className='flex items-center gap-2'>
            <input type="checkbox" defaultChecked={false} />
            <span>{title}</span>
        </label>
        <Button variant="destructive" size="sm">Delete</Button>
    </div>
  )
}

export default TodoItem