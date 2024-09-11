// J'ai suivi la documentation du nouveau [Prisma Adapter](https://authjs.dev/reference/adapter/prisma).

// Crée aussi un fichier :

// ```ts
// // src/lib/auth.ts
import { authOptions } from '@/app/api/auth/[...nextauth]';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

type ParametersGetServerSession =
  | []
  | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
  | [NextApiRequest, NextApiResponse];

export const getAuthSession = async (...parameters: ParametersGetServerSession) => {
  const session = await getServerSession(...parameters, authOptions);
  return session;
};