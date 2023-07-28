'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import Typography from '@design-system/Typography';

import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  onClick?: () => void;
  to?: string;
  title: string;
  description?: string;
};

function FeatureCard(props: FeatureCardProps) {
  const { children, as, to, title, description, ...others } = props;
  const router = useRouter();

  const Component = as || 'button';

  return (
    <Component className={styles.root} onClick={() => router.push(to as string)} {...others}>
      <Typography as="h2">{title}</Typography>
      <Typography size="s">{description}</Typography>
      {children}
    </Component>
  );
}

export default FeatureCard;
