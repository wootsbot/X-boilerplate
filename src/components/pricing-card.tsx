'use client';

import Button from '@design-system/button/Button';
import * as Icons from '@design-system/icons';
import { motion } from 'framer-motion';

import { cls } from '@/utils/cls';

type FeatureProps = {
  title: string;
  description?: string;
};

type PricingCardProps = {
  price: number;
  title: string;
  description: string;
  isPopular?: boolean;
  isSubscription?: boolean;
  priceDescription?: string;
  isOneTime?: boolean;
  textHelper?: string;
  textAction: string;
  features: FeatureProps[];
  onAction?: () => void;
  isPendingAction?: boolean;
};

export function PricingCard({
  price,
  title,
  isPopular,
  isSubscription,
  description,
  priceDescription,
  isOneTime,
  textHelper,
  textAction,
  features,
  onAction,
  isPendingAction,
}: PricingCardProps) {
  const hoverVariants = {
    initial: {
      scale: isPopular ? 1.05 : 1,
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={cls(
        'relative w-full px-6 py-12 rounded-md outline outline-1 outline-stone-300 bg-stone-200',
        isPopular && 'bg-stone-300 outline-stone-400',
      )}
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
    >
      {isPopular && (
        <div className="absolute px-4 py-3 bg-amber-500 rounded-tr-2xl -top-6 -left-[0.5px]">
          <h3 className="text-sm font-semibold text-white">Popular</h3>
        </div>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">{title}</h2>

          <p className="text-sm">{description}</p>

          <Button
            disabled={isPendingAction}
            loading={isPendingAction}
            onClick={onAction}
            endIcon={<Icons.ArrowRightIcon size={16} color="#fff" />}
          >
            {textAction}
          </Button>

          <div className="flex flex-col gap-1">
            {isSubscription && <span className="text-sm text-stone-600">From</span>}

            <div className="flex flex-row items-baseline gap-2">
              <span className="text-5xl font-medium">${price}</span>
              {isSubscription && <span className="text-xs text-stone-600">/ month</span>}
              {isOneTime && <span className="px-2 py-1 text-xs rounded-full bg-amber-500">One time</span>}
            </div>

            {priceDescription && (
              <div>
                <p className="text-sm text-stone-600">$10 in compute credits included</p>
              </div>
            )}
          </div>

          <div className="w-full bg-black outline outline-[0.5px] outline-amber-950" />
          {textHelper && <h3 className="text-sm text-stone-600">{textHelper}</h3>}
          <ul className="flex flex-col gap-2">
            {features?.map((feature) => <Feature key={feature.title} {...feature} />)}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Feature({ title, description }: FeatureProps) {
  return (
    <li className="flex items-baseline gap-2">
      <div className="w-2 h-2 bg-amber-600" />

      <div className="flex flex-col gap-1">
        <span className="text-sm text-stone-950">{title}</span>
        {description && <span className="text-xs text-stone-600">{description}</span>}
      </div>
    </li>
  );
}
