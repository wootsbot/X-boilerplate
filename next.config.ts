import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const {
  SITE_NAME,
  TWITTER_CREATOR,
  SITE_URL,
  RESEND_API_KEY,
  RESEND_DOMAIN,
  AUTH_SECRET,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_CURRENCY,
  PERSONAL_GITHUB_TOKEN,
  BETTER_AUTH_SECRET,
  BETTER_AUTH_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  DATABASE_URL,
} = process.env;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME,
    TWITTER_CREATOR,
    SITE_URL,
    RESEND_API_KEY,
    RESEND_DOMAIN,
    AUTH_SECRET,
    STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY,
    STRIPE_CURRENCY,
    PERSONAL_GITHUB_TOKEN,
    BETTER_AUTH_SECRET,
    BETTER_AUTH_URL,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    DATABASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
