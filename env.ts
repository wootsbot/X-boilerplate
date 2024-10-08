import localeCulture from '@openkit/language-codes';
import * as z from 'zod';

const zodEnv = z.object({
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
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),

  NEXT_PUBLIC_PERSONAL_GITHUB_TOKEN: z.string(),

  /*
   * RESEND
   * src: See https://resend.com/docs/send-with-nextjs.
   */
  RESEND_API_KEY: z.string(),
  RESEND_DOMAIN: z.string(),

  /*
   * SITE CONFIG - PUBLIC
   */
  NEXT_PUBLIC_SITE_URL: z.string().url().min(1),

  /*
   * LANGUAGE CONFIG - PUBLIC
   */
  NEXT_PUBLIC_DEFAULT_LANGUAGE_KEY: z.enum([localeCulture.EN.folderName, localeCulture.ES_MX.folderName]).optional(),
  NEXT_PUBLIC_API_URL_BASE: z.string().min(1),
  NEXT_PUBLIC_LANGUAGE: z.string(),

  STRIPE_SECRET_KEY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  STRIPE_CURRENCY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.TypeOf<typeof zodEnv> {}
  }
}

try {
  zodEnv.parse(process.env);
} catch (err) {
  if (err instanceof z.ZodError) {
    const { fieldErrors } = err.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) => (errors ? `${field}: ${errors.join(', ')}` : field))
      .join('\n  ');

    throw new Error(`X: Missing environment variables:\n  ${errorMessage}`);

    process.exit(1);
  }
}

/**
 * WIP
 * use `import env from '~/env';`
 */
// const runtimeEnv = {
//   SITE_URL: process.env.SITE_URL,
//   SITE_NAME: process.env.SITE_NAME,
//   TWITTER_CREATOR: process.env.TWITTER_CREATOR,
//   NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

//   GITHUB_ID: process.env.GITHUB_ID,
//   GITHUB_SECRET: process.env.GITHUB_SECRET,
//   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//   SECRET: process.env.SECRET,

//   RESEND_API_KEY: process.env.RESEND_API_KEY,
//   RESEND_DOMAIN: process.env.RESEND_DOMAIN,

//   NEXT_PUBLIC_DEFAULT_LANGUAGE_KEY: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE_KEY,
// };

//export default runtimeEnv;
