import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"

async function Page({ params }: { params: { coursid: string } }) {
    const cours = await prisma.cours.findUnique({ where: { id: parseInt(params.coursid) } })
    return (
        <div className="w-full justify-center">
            {cours ? (
                <Card className='w-fit h-fit'>
                <CardHeader>
                    <CardTitle>{cours.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Avatar>
                    <AvatarImage src={cours.photo ?? undefined} alt={cours.name ?? ""} className='w-32 h-32 rounded-lg' />
                    <AvatarFallback>{cours.name?.[0]?.toUpperCase() ?? "U"}</AvatarFallback>
                    </Avatar>
                </CardContent>
            </Card>
            ) : (
                <div>Course not found</div>
            )}
        </div>
    )
}

export default Page