'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import ButtonGoBack from '@design-system/ButtonGoBack';
import Typography from '@design-system/Typography';

import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

function Header({ title, subTitle, message, onGoBack, toGoBack = '/', name, ...props }: HeaderProps) {
  const router = useRouter();

  function handleToGoBack() {
    router.push(toGoBack as string);
  }

  return (
    <header className={styles.root} {...props}>
      <h1>{title}</h1>

      <Typography as="h2" size="s">
        {subTitle}
        {` `}
        <em>{name}</em>!
      </Typography>
      <Typography size="s">{message}</Typography>

      <ButtonGoBack onClick={onGoBack ?? handleToGoBack} label="Go back" />
    </header>
  );
}

export default Header;
