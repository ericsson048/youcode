'use client' 
 
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import {  Card,
    CardContent,
    CardHeader,
    CardTitle, } from '@/components/ui/card'
import LogInButton from '@/components/LogInButton'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {   
  }, [error])
 
  return (
   <div className="flex w-full justify-center ">
     <Card className='p-4'>
        <CardHeader>
            <CardTitle>Oops! Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className='flex items-center gap-1'>
            <p className='text-white/60'>Log in on this button:</p><LogInButton/>
        </CardContent>
    </Card>
   </div>
  )
}