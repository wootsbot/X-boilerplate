'use server';

import type Stripe from 'stripe';

import { stripe } from '@/libs/stripe/checkout/config';

import { getURL } from '@/utils/helpers';

// type Price = Stripe.Price;

export async function checkoutWithStripe(redirectPath: string = '/') {
  let params: Stripe.Checkout.SessionCreateParams = {
    allow_promotion_codes: true,
    billing_address_collection: 'required',
    // payment_method_types: ['card'],
    // customer_update: {
    //   address: 'auto',
    // },
    line_items: [
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'Pruebas',
          },
          unit_amount: 8000, // En centavos (MXN 80.00)
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    cancel_url: getURL(),
    success_url: getURL(redirectPath),
  };

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
}
