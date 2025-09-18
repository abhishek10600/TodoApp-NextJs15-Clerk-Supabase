import React, { useTransition } from 'react'
import { Button } from '@/components/ui/button';
import { TodoType } from '@/types/types';
import { deleteTodo, toggleTodo } from '@/actions/todos';

interface TodoIteprops extends TodoType{
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({id, title, completed, onToggle, onDelete}: TodoIteprops) => {
    const [isPending, startTransition] = useTransition();

    const handleToggle = (checked: boolean) => {
    startTransition(async () => {
      await toggleTodo(id, checked);
      onToggle(id, checked); // update UI immediately
    });
  };

   const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(id);
      onDelete(id); // update UI immediately
    });
  };

  return (
    <div className='flex items-center justify-between border rounded p-2'>
        <label className='flex items-center gap-2'>
            <input type="checkbox" checked={completed} onChange={(e) => handleToggle(e.target.checked)} />
            <span className={completed ? "line-through text-green-500" : ""}>{title}</span>
        </label>
        <Button variant="destructive" size="sm" onClick={handleDelete}>Delete</Button>
    </div>
  )
}

export default TodoItem