import * as React from 'react';

import Button from '@design-system/Button';
import ButtonGoBack from '@design-system/ButtonGoBack';
import ArrowLeftLine from '@design-system/icons/ArrowLeftLine';
import Typography from '@design-system/Typography';

import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

function Header({ title, subTitle, message, onGoBack, name, ...props }: HeaderProps) {
  return (
    <header className={styles.root} {...props}>
      <h1>{title}</h1>

      <Typography as="h2" size="s">
        {subTitle}
        {` `}
        <em>{name}</em>!
      </Typography>
      <Typography size="s">{message}</Typography>

      <ButtonGoBack onClick={onGoBack} label="Go back" />
    </header>
  );
}

export default Header;
