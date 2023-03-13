'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
};

function FeatureCard(props: FeatureCardProps) {
  const { as, to, ...others } = props;
  const router = useRouter();

  const Component = as || 'button';

  return <Component className={styles.root} onClick={() => router.push(to as string)} {...others} />;
}

export default FeatureCard;
