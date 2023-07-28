'use client';

import styles from './Container.module.css';

function Container({ ...others }) {
  return <div className={styles.root} {...others} />;
}

export default Container;
