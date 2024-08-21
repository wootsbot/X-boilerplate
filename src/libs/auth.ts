// import type { NextAuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],

//   secret: process.env.SECRET,

//   pages: {
//     signIn: '/auth/signin',
//   },
// };
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  // secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
});
