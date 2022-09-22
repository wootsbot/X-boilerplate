import ArrowLeftLine from '@design-system/icons/ArrowLeftLine';

import styles from './ButtonGoBack.module.css';
import { ButtonGoBackProps } from './ButtonGoBack.types';

function ButtonGoBack({ label, ...props }: ButtonGoBackProps) {
  return (
    <button className={styles.root} {...props}>
      <div className={styles.wrapper}>
        <ArrowLeftLine />
      </div>

      {label}
    </button>
  );
}

export default ButtonGoBack;
