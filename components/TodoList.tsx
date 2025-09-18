"use client";

import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { getTodos } from "@/actions/todos";
import { TodoType } from "@/types/types";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggle = (id: string, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="space-y-2">
      {/* Pass fetchTodos down so TodoInput can refresh list */}
      <TodoInput onTodoCreated={fetchTodos} />

      {todos.map((todo: TodoType) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
