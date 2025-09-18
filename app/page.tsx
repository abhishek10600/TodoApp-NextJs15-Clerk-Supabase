"use client";

import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold mb-6'>Todo App</h1>

      <SignedOut>
        <SignInButton mode="redirect">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <Link href="/todos" className='mt-4 underline text-blue-600'>Go To Dashboard</Link>
      </SignedIn>
    </main>
  )
}

export default HomePage;