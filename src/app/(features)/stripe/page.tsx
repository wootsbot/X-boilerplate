import { getStripeProductsAction } from '@/state/actions/stripe';

import { ToolsList } from '@/components/tools-list';
import type { Tool } from '@/components/tools-list';

import pkg from '~/pgk';
import { PricingForm } from './pricing-form';

const TOOLS: Tool[] = [
  { version: pkg.dependencies.stripe, name: 'stripe', urlRef: 'https://github.com/stripe/stripe-node' },
  {
    version: pkg.dependencies['@stripe/stripe-js'],
    name: '@stripe/stripe-js',
    urlRef: 'https://stripe.com/docs/js',
  },
  {
    version: pkg.dependencies['framer-motion'],
    name: 'framer-motion',
    urlRef: 'https://github.com/framer/motion#readme',
  },
  {
    version: pkg.dependencies['next-safe-action'],
    name: 'next-safe-action',
    urlRef: 'https://github.com/TheEdoRan/next-safe-action#readme',
  },
  {
    version: pkg.dependencies['sonner'],
    name: 'sonner',
    urlRef: 'https://sonner.emilkowal.ski/',
  },
  {
    version: pkg.dependencies['zod'],
    name: 'zod',
    urlRef: 'https://zod.dev',
  },
];

export default async function StripePage() {
  const products = await getStripeProductsAction();

  const startedPlan = products?.data?.find((product) => product.name === 'X_started');
  const teamPlan = products?.data?.find((product) => product.name === 'X_team');
  const proPlan = products?.data?.find((product) => product.name === 'X_pro');

  return (
    <div className="flex flex-col gap-16">
      <section className="px-6 py-12 rounded-md outline outline-1 outline-stone-400 bg-[url('/svg/grid_03.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-center">
            <h1 className="text-6xl">Find a plan to power your projects.</h1>
            <p className="text-lg">From early-stage startups to growing enterprises, X Boilerplate has you covered.</p>
          </div>

          <div className="max-w-4xl px-4 mx-4 sm:mx-auto">
            <PricingForm />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-end gap-3">
            <h2 className="text-5xl font-medium">Tools</h2>
            <p className="text-sm font-thin">tools used in the development this example and its respective versions.</p>
          </div>

          <ToolsList list={TOOLS} />
        </div>
      </section>
    </div>
  );
}
