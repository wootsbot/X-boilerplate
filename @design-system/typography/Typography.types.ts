import { ElementType, HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType<HTMLAttributes<HTMLElement>>;
  size?: 's' | 'm' | 'l' | 'xl' | '2xl';
}
