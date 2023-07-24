import NextAuth from 'next-auth';

import { authOptions } from '@/libs/auth';

export default NextAuth(authOptions);
