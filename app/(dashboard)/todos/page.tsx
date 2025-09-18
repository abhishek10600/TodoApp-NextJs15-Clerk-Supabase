import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const DashboardPage = async() => {

  const {userId} = await auth();
  if(!userId){
    redirect("/sign-in")
  }
  return (
    <main className='max-w-lg mx-auto py-10'>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <h1 className='text-2xl font-bold mb-6'>My Todos</h1>
      <TodoInput/>
      <TodoList/>
    </main>
  )
}

export default DashboardPage