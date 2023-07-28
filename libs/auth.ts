import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import env from '~/env';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],

  secret: env.SECRET,

  pages: {
    signIn: '/auth/signin',
  },
};
