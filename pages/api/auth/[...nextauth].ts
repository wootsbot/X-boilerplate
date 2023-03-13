import NextAuth from 'next-auth';

import { authOptions } from '@/libs/nextAuth';

export default NextAuth(authOptions);
