import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  //database: new Database("../../auth.db"),
  database: new Pool({
    connectionString: "postgresql://postgres:Loco20wey51216@db.nxbumasfeshhuoscxeny.supabase.co:5432/postgres",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  advanced: {
    cookiePrefix: "x-boilerplate",
  },
});
