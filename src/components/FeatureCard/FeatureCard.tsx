import * as React from 'react';

import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
  onClick?: () => void;
};

function FeatureCard(props: FeatureCardProps) {
  const { as, ...others } = props;

  const Component = as || 'button';

  return <Component className={styles.root} {...others} />;
}

export default FeatureCard;
