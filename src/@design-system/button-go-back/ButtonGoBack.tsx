import Link from 'next/link';

import ArrowLeftLine from '@design-system/icons/ArrowLeftLine';

import styles from './ButtonGoBack.module.css';
import { ButtonGoBackProps } from './ButtonGoBack.types';

function ButtonGoBack({ label, to, ...props }: ButtonGoBackProps) {
  const Component = to ? Link : 'button';

  return (
    <Component href={to ?? ''} className={styles.root} {...props}>
      <div className={styles.wrapper}>
        <ArrowLeftLine />
      </div>

      <span className={styles.label}>{label}</span>
    </Component>
  );
}

export default ButtonGoBack;
