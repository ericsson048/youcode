"use client"

import { useMutation } from "@tanstack/react-query"
import { signIn } from 'next-auth/react';
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";


function LogInButton() {
    const mutation = useMutation({
        mutationFn:async () => signIn()
    })

  return (
    <Button variant={"outline"} onClick={() => mutation.mutate()} className="flex items-center justify-center gap-1"><LogIn size={14}/> Login</Button>

  )
}

export default LogInButton