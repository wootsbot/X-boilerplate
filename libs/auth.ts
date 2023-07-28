import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import env from '~/env';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],

  secret: process.env.SECRET,

  pages: {
    signIn: '/auth/signin',
  },
};
