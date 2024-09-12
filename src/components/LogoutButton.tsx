"use client"

import { useMutation } from "@tanstack/react-query"
import {signOut} from 'next-auth/react';
import { Button } from "./ui/button";
import {  LogOut } from "lucide-react";


function LogoutButton() {
    const mutation = useMutation({
        mutationFn:async () => signOut()
    })

  return (
    <Button variant={"outline"} onClick={() => mutation.mutate()} className="flex items-center justify-center gap-1"><LogOut size={14}/> Logout</Button>

  )
}

export default LogoutButton