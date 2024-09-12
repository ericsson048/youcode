"use client"
import React from 'react'
import { Button, buttonVariants } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LogIn, LogOut, User2 } from 'lucide-react';
import Link from 'next/link';


function GitSession()  {
    const mutation = useMutation({
        mutationFn: () => signIn()
      });
      
      const{data: session}= useSession();
      const user = session?.user;
      if(user) return(
        // user card
        <div className='flex items-center flex-col justify-center'>
        {user.image && (
          <Image src={user.image} alt={user.name ?? ''} width={50} height={50} className='rounded-full' />
        )}
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold">{user.name}</p>
          <p className="text-sm my-1 text-white/40">{user.email}</p>
        </div>
        <div className='flex flex-row gap-3 justify-center items-center'>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className='gap-2'><LogOut size={23}/>LogOut</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-red-500'>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=> signOut()}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <Link href="/account" className={buttonVariants({variant:"outline"})+"flex gap-2 space-y-0 items-center justify-center"}> <User2 size={24}/> Account</Link>
        </div>
        </div>
      )
  return (
    <>
     <Button className='w-full p-3 font-serif text-xl border border-white rounded-lg' onClick={() => mutation.mutate()}>
        Login with GitHub
    </Button>
     <Button className='w-full p-3 font-serif text-xl border border-white rounded-lg' onClick={() => signIn("github")}>
        Login with Google
     </Button>
    </>
  )
}

export default GitSession