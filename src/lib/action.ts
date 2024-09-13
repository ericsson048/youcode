// function getaLLcours

import { prisma } from "./prisma";

async function getAllCours(userId: string) {
    const allCours = await prisma.course.findMany({
        where: { creatorId: userId }
    });
    return allCours;
}

export { getAllCours };