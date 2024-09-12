"use client"

import { useSession } from "next-auth/react"
import Image from "next/image";

function Profile() {
    const {data:session}= useSession();
    const user = session?.user;
    if(!user) return(
        <div>logged in</div>
    )
  return (
    <div className=" p-3
     flex flex-row gap-3 justify-center items-center">
        {user.image && <Image src={user.image} width={24} height={24} alt="User profile" className="rounded-full" />}
        <p className="text-sm">{user.name?.split(" ")[1]}</p>
    </div>
  )
}

export default Profile