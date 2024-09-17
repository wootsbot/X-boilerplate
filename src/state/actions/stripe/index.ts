'use server';

import type Stripe from 'stripe';

import { actionClient } from '@/libs/safe-action';
import { stripe } from '@/libs/stripe/checkout/config';

import { getURL } from '@/utils/helpers';

import { zStripeCheckoutSchema } from './schema';

import { calculateTrialEndUnixTimestamp } from '#/state/actions/stripe/utils';

export const stripeCheckoutAction = actionClient
  .schema(zStripeCheckoutSchema())
  .metadata({
    name: 'stripe-checkout',
  })
  .action(async ({ parsedInput }) => {
    const propertiesPayment = zStripeCheckoutSchema().parse(parsedInput);

    let params: Stripe.Checkout.SessionCreateParams = {
      allow_promotion_codes: propertiesPayment.payments.allowPromotionCodes,
      billing_address_collection: propertiesPayment.payments.billingAddressCollection,
      line_items: [
        {
          price_data: {
            currency: propertiesPayment.price.currency,
            product_data: {
              name: propertiesPayment.price.name,
            },
            unit_amount: propertiesPayment.price.unitAmount,
          },
          quantity: propertiesPayment.price.quantity,
        },
      ],
      cancel_url: getURL(propertiesPayment.cancelPath),
      success_url: getURL(propertiesPayment.successPath),
    };

    if (propertiesPayment.price.type === 'recurring') {
      params = {
        ...params,
        line_items: [
          {
            price: propertiesPayment.price.id,
            quantity: propertiesPayment.price.quantity,
          },
        ],
        mode: 'subscription',
      };

      if (propertiesPayment.price.trialPeriodDays) {
        params = {
          ...params,
          subscription_data: {
            trial_end: calculateTrialEndUnixTimestamp(propertiesPayment.price.trialPeriodDays),
          },
        };
      }
    }

    if (propertiesPayment.price.type === 'oneTime') {
      params = {
        ...params,
        mode: 'payment',
      };
    }

    // Create a checkout session in Stripe
    let session;

    try {
      session = await stripe.checkout.sessions.create(params);
    } catch (err) {
      console.error(err);
      throw new Error('Unable to create checkout session.');
    }

    // Instead of returning a Response, just return the data or error.
    if (session) {
      return { sessionId: session.id };
    } else {
      throw new Error('Unable to create checkout session.');
    }
  });

export const getStripeProductsAction = actionClient
  .metadata({
    name: 'stripe-get-products',
  })
  .action(async () => {
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    return products.data.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      defaultPriceId: typeof product.default_price === 'string' ? product.default_price : product.default_price?.id,
    }));
  });
