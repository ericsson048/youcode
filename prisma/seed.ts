import { PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Fonction principale pour générer les données de test
const main = async () => {
  const users: any[] = [];

  // Création de 10 utilisateurs, chacun avec un cours
  for (let i = 0; i < 10; i++) {
    users.push(
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          createdAt: faker.date.past(),
          createdCourses: {
            create: {
              name: faker.lorem.words(3),
              createdAt: faker.date.past(),
              presantation: faker.lorem.paragraph(),
              photo: faker.image.url(),
              // Création de deux leçons pour chaque cours
              lessons: {
                createMany: {
                  data: [
                    {
                      name: faker.lorem.words(3),
                      content: faker.lorem.paragraph(),
                      rank: 'aaaaaa',
                    },
                    {
                      name: faker.lorem.words(3),
                      content: faker.lorem.paragraph(),
                      rank: 'aaaaab',
                    },
                  ],
                },
              },
            },
          },
        },
      })
    );
  }

  // Liaison des utilisateurs aux cours
  const courses = await prisma.course.findMany();

  // Pour chaque cours, on sélectionne aléatoirement 3 utilisateurs
  for (const course of courses) {
    const random3Users = faker.helpers.arrayElements(users, 3);

    // Création des relations entre les utilisateurs et le cours
    for (const user of random3Users) {
      await prisma.courseOnUser.create({
        data: {
          userId: user.id,
          courseId: course.id,
        },
      });
    }
  }
};

// Exécution de la fonction principale
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });