import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  server: {
    /*
    * SITE CONFIG
    */
    SITE_URL: z.string().min(1),
    SITE_NAME: z.string().min(1),
    TWITTER_CREATOR: z.string().min(1),

    /*
    * NEXTAUTH
    * src: See https://next-auth.js.org/deployment.
    */
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    SECRET: z.string(),

    /*
    * RESEND
    * src: See https://resend.com/docs/send-with-nextjs.
    */
    RESEND_API_KEY: z.string(),
    RESEND_DOMAIN: z.string(),
  },
  client: {
    /*
    * SITE CONFIG - PUBLIC
    */
    NEXT_PUBLIC_SITE_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    SITE_NAME: process.env.SITE_NAME,
    TWITTER_CREATOR: process.env.TWITTER_CREATOR,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    SECRET: process.env.SECRET,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_DOMAIN: process.env.RESEND_DOMAIN,
  },
});

export default env;
