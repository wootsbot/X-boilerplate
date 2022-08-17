import * as React from 'react';

import styles from './Typography.module.css';
import { HeadingProps } from './Typography.types';

const fontSizes = {
  s: '14px',
  m: '20px',
};

function Typography(props: HeadingProps) {
  const { as, size = 'm', ...others } = props;

  const Component = as || 'p';

  return <Component style={{ fontSize: fontSizes[size] }} className={styles.root} {...others} />;
}

export default Typography;
