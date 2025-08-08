import { z } from "zod";

export const zStripeCheckoutPriceSchema = () =>
  z.object({
    priceId: z.string().min(1, "Price ID from Stripe, e.g. price_1216.").optional(),
    priceType: z.enum(["one_time", "recurring"]).default("one_time"),
    trialPeriodDays: z.number().nullable().optional(),
  });

export type StripeCheckoutPriceSchema = z.infer<ReturnType<typeof zStripeCheckoutPriceSchema>>;

export const zStripeProductsSchema = () =>
  z.object({
    id: z.string().min(1, "Product ID from Stripe, e.g. prod_1216.").optional(),
    name: z.string(),
    description: z.string().nullable().optional(),
    defaultPriceId: z.string().optional(),
  });
export type StripeProductsSchema = z.infer<ReturnType<typeof zStripeProductsSchema>>;
