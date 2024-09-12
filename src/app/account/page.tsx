import {  Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from '@/components/ui/card'
import { getAuthSession } from '@/lib/auth'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import LogoutButton from '@/components/LogoutButton'

async function page() {
    const session =await getAuthSession()
    if (!session) {
        throw new Error('Unauthorized')
    }
    const user = session?.user
  return (
    <div className="flex justify-center">
        <Card className='w-[450px]'>
        <CardHeader>
            <div className=' flex flow-row gap-3 space-y-0'>
        <Avatar>
            <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
            <AvatarFallback>{user.name?.[0]?.toUpperCase() ?? "U"}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center items-start'>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
        </div>
        </div>
        </CardHeader>
        <CardContent className='flex flex-col justify-center items-center gap-3'>
            <Link href="/account/settings" className={buttonVariants({variant:"outline"})+"flex gap-2  w-full space-y-0 items-center justify-center"}> Settings</Link>
            <Link href="/admin" className={buttonVariants({variant:"outline"})+"flex gap-2 space-y-0 w-full items-center justify-center"}> Admin</Link>
        </CardContent>
        <CardFooter className='flex flex-col justify-center items-end gap-3'>
          <LogoutButton/>
        </CardFooter>
    </Card>
    </div>
  )
}

export default page