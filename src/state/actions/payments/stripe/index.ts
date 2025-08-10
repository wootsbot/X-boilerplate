"use server";

import { redirect } from "next/navigation";

import type Stripe from "stripe";

import { stripe } from "#/lib/payments/stripe/checkout/config";
import { actionClient, authUserActionClient } from "#/lib/safe-action";

import { getURL } from "#/lib/utils/helpers";

import { zStripeCheckoutPriceSchema } from "./schema";

export const stripeCheckoutAction = authUserActionClient
  .inputSchema(zStripeCheckoutPriceSchema())
  .metadata({
    name: "stripe-checkout",
  })
  .action(async ({ parsedInput, ctx: { user } }) => {
    const { priceId, priceType, trialPeriodDays } = parsedInput;

    if (!user) {
      redirect(`/login?redirect=checkout&priceId=${priceId}`);
    }

    let stripeCustomer: Stripe.Customer;

    try {
      const existingCustomers = await stripe.customers.list({
        email: user.email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        stripeCustomer = existingCustomers.data[0];
      } else {
        stripeCustomer = await stripe.customers.create({
          email: user.email,
          name: user.name || undefined,
          metadata: {
            sessionUserId: user.id,
          },
        });
      }
    } catch (err) {
      console.error("Error handling Stripe customer:", err);
      throw new Error("Unable to create or find customer.");
    }

    let params: Stripe.Checkout.SessionCreateParams = {
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      customer: stripeCustomer.id || undefined,
      client_reference_id: user.id,
      cancel_url: getURL("/stripe"),
      success_url: getURL("/stripe?session_id={CHECKOUT_SESSION_ID}"),
    };

    if (priceType === "recurring") {
      params = {
        ...params,
        mode: "subscription",
        payment_method_types: ["card"],
        subscription_data: {
          trial_period_days: trialPeriodDays as number,
        },
      };
    }

    if (priceType === "one_time") {
      params = {
        ...params,
        mode: "payment",
      };
    }

    let session: Stripe.Checkout.Session;

    try {
      session = await stripe.checkout.sessions.create(params);
    } catch (err) {
      console.error(err);
      throw new Error("Unable to create checkout session.");
    }

    redirect(session.url || "/stripe");
  });

export const getStripeProductsAction = actionClient
  .metadata({
    name: "stripe-get-products",
  })
  .action(async () => {
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
    });

    return products.data.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      defaultPriceId: typeof product.default_price === "string" ? product.default_price : product.default_price?.id,
    }));
  });

export const getStripePricesAction = actionClient
  .metadata({
    name: "stripe-get-prices",
  })
  .action(async () => {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
      active: true,
    });

    return prices.data.map((price) => ({
      id: price.id,
      productId: typeof price.product === "string" ? price.product : price.product.id,
      unitAmount: price.unit_amount,
      currency: price.currency,
      interval: price.recurring?.interval ?? null,
      trialPeriodDays: price.recurring?.trial_period_days,
      type: price.type,
    }));
  });
