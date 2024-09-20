import Stripe from 'stripe';

import pgk from '~/pkg';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  // https://stripe.com/docs/api/versioning
  // @ts-ignore
  apiVersion: null,
  // Register this as an official Stripe plugin.
  // https://stripe.com/docs/building-plugins#setappinfo
  appInfo: {
    name: 'X-boilerplate Subscription',
    version: pgk.version,
    url: 'https://github.com/wootsbot/X-boilerplate',
  },
});
