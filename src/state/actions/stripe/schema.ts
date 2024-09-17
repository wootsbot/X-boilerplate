import { z } from 'zod';

export const zStripeCheckoutSchema = () =>
  z.object({
    successPath: z.string().min(1, '"Success Path" is a required field'),
    cancelPath: z.string().min(1, '"Cancel Path" is a required field').optional(),
    price: z.object({
      id: z.string().min(1, 'Price ID from Stripe, e.g. price_1216.').optional(),
      name: z.string().min(1, `"Name" is a required field`),
      type: z.enum(['oneTime', 'recurring']).default('oneTime'),
      currency: z.string().min(1, `"Currency" is a required field`).optional().default('usd'),
      unitAmount: z.number().min(1, `"Unit Amount" is a required field, in cents`).optional(),
      quantity: z.number().min(1, `"Quantity" is a required field`),
      trialPeriodDays: z.number().optional(),
      pricingPlanInterval: z.enum(['day', 'week', 'month', 'year']).optional().default('month'),
    }),
    payments: z
      .object({
        allowPromotionCodes: z.boolean().optional().default(false),
        methodType: z
          .array(z.enum(['card']))
          .default(['card'])
          .optional(),
        billingAddressCollection: z.enum(['required', 'auto']).optional().default('required'),
      })
      .optional()
      .default({
        allowPromotionCodes: false,
        methodType: ['card'],
        billingAddressCollection: 'required',
      }),
  });
export type StripeCheckoutSchema = z.infer<ReturnType<typeof zStripeCheckoutSchema>>;

export const zStripeProductsSchema = () =>
  z.object({
    id: z.string().min(1, 'Product ID from Stripe, e.g. prod_1216.').optional(),
    name: z.string(),
    description: z.string().nullable().optional(),
    defaultPriceId: z.string().optional(),
  });
export type StripeProductsSchema = z.infer<ReturnType<typeof zStripeProductsSchema>>;
