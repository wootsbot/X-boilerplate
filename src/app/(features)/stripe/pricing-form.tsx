'use client';

import { useState } from 'react';

import { useAction } from 'next-safe-action/hooks';

import { toast } from '@design-system/toast';

import { getStripe } from '@/libs/stripe/checkout/client';

import { PricingCard } from '@/components/pricing-card';
import { stripeCheckoutAction } from '#/state/actions/stripe';

const pricingList = [
  {
    id: 'started',
    title: 'Started',
    description: 'Perfect for passion projects & simple websites.',
    price: 9,
    isOneTime: true,
    isPopular: false,
    textHelper: 'Get started with:',
    textAction: 'Start with Started',
    features: [
      { title: 'Unlimited API requests' },
      { title: '50,000 monthly active users' },
      { title: '500 MB database space', description: 'Shared CPU • 500 MB RAM' },
      { title: '5 GB bandwidth' },
      { title: '1 GB file storage' },
      { title: 'Community support' },
    ],
  },
  {
    id: 'price_1PygaAJNokdDIYbt7ZB0nRbY',
    title: 'Pro',
    description: 'For production applications with the power to scale.',
    price: 25,
    isPopular: true,
    isOneTime: false,
    isSubscription: true,
    priceDescription: '$10 in compute credits included',
    textHelper: 'Everything in the Started Plan, plus:',
    textAction: 'Get Started',
    features: [
      { title: '7-day free' },
      { title: '100,000 monthly active users', description: 'then $0.00325 per MAU' },
      { title: '8 GB disk size per project', description: 'then $0.125 per GB' },
      { title: '250 GB bandwidth', description: 'then $0.09 per GB' },
      { title: '100 GB file storage', description: 'then $0.021 per GB' },
      { title: 'Email support' },
      { title: 'Daily backups stored for 7 days' },
      { title: '7-day log retention' },
    ],
  },
  {
    id: 'price_1PygiLJNokdDIYbtuXkEGk5D',
    title: 'Team',
    description: 'Add features such as SSO, control over backups, and industry certifications.',
    price: 599,
    isPopular: false,
    isOneTime: false,
    isSubscription: true,
    priceDescription: '$10 in compute credits included',
    textHelper: 'Everything in the Pro Plan, plus:',
    textAction: 'Get Started',
    features: [
      { title: '15-day free' },
      { title: 'SOC2' },
      { title: 'HIPAA available as paid add-on' },
      { title: 'Read-only and Billing member roles' },
      { title: 'SSO for Supabase Dashboard' },
      { title: 'Priority email support & SLAs' },
      { title: 'Daily backups stored for 14 days' },
      { title: '28-day log retention' },
    ],
  },
];

export function PricingForm() {
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  const stripeCheckout = useAction(stripeCheckoutAction, {
    onSuccess: async ({ data }) => {
      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId: data?.sessionId as string });
    },
    onError: ({ error }) => {
      toast.error('An error occurred while processing your payment. Please try again.', {
        description: error.serverError,
      });
    },
  });

  const handleStripeCheckoutStarted = async () => {
    setPriceIdLoading('started');

    stripeCheckout.execute({
      price: {
        currency: 'usd',
        name: 'started',
        unitAmount: 900,
        quantity: 1,
        type: 'oneTime',
        trialPeriodDays: 7,
      },
      payments: {
        allowPromotionCodes: true,
      },
      successPath: '/success',
    });
  };

  const handleStripeCheckout = (price: { id: string; name: string; trialPeriodDays?: number }) => {
    setPriceIdLoading(price.id);
    stripeCheckout.execute({
      price: {
        id: price.id,
        name: price.name,
        quantity: 1,
        type: 'recurring',
        trialPeriodDays: price.trialPeriodDays,
      },
      successPath: '/success',
    });
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {pricingList.map((pricing) => (
        <PricingCard
          key={pricing.id}
          title={pricing.title}
          description={pricing.description}
          price={pricing.price}
          isOneTime={pricing.isOneTime}
          textHelper={pricing.textHelper}
          textAction={pricing.textAction}
          features={pricing.features}
          isPopular={pricing.isPopular}
          isSubscription={pricing.isSubscription}
          priceDescription={pricing.priceDescription}
          onAction={
            pricing.id === 'started'
              ? handleStripeCheckoutStarted
              : () => handleStripeCheckout({ id: pricing.id, name: pricing.title })
          }
          isPendingAction={pricing.id === priceIdLoading && stripeCheckout.isPending}
        />
      ))}
    </div>
  );
}
