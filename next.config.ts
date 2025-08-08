import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const {
  SITE_NAME,
  TWITTER_CREATOR,
  SITE_URL,
  RESEND_API_KEY,
  RESEND_DOMAIN,
  AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET,
  AUTH_SECRET,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_CURRENCY,
  PERSONAL_GITHUB_TOKEN,
} = process.env;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME,
    TWITTER_CREATOR,
    SITE_URL,
    RESEND_API_KEY,
    RESEND_DOMAIN,
    AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET,
    AUTH_SECRET,
    STRIPE_SECRET_KEY,
    STRIPE_PUBLISHABLE_KEY,
    STRIPE_CURRENCY,
    PERSONAL_GITHUB_TOKEN,
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
