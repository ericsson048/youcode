import { prisma } from '@/lib/prisma';

export const getCourse = async ({
  courseId,
  userId,
  userPage,
}: {
  courseId: string;
  userId: string;
  userPage: number;
}) => {
  // Validate courseId
  if (!courseId) {
    throw new Error("courseId is required");
  }

  const courses = await prisma.course.findUnique({
    where: {
      creatorId: userId,
      id: courseId,
    },
    select: {
      id: true,
      photo: true,
      name: true,
      presantation: true,
      users: {
        take: 5, 
        skip: (userPage - 1) * 5, 
        select: {
          canceledAt: true,
          id: true,
          user: {
            select: {
              email: true,
              id: true,
              image: true,
            },
          },
        },
      },
      _count: {
        select: {
          lessons: true,
          users: true,
        },
      },
    },
  });

  const users = courses?.users.map((user) => {
    return {
      canceled: user.canceledAt ? true : false,
      ...user.user,
    };
  });

  return {
    ...courses,
    users,
  };
};