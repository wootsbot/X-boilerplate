/* eslint-disable no-unused-vars */
import type { NextPage } from 'next';
import * as React from 'react';

export type NextPageLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  auth?: boolean;
};

export type Nullable<T> = T | null;
