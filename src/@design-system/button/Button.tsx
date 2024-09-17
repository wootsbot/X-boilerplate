'use client';

import * as React from 'react';

import { cls } from '@/utils/cls';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  endIcon?: React.ReactNode;
};

function Button({ children, className, disabled, variant, endIcon, loading, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cls(
        'flex flex-row items-center justify-center gap-2 bg-stone-950 px-4 py-3 text-white rounded-md outline outline-1 outline-stone-950 hover:bg-stone-800',
        className,
        disabled && 'bg-stone-400 hover:bg-stone-400 outline-stone-400',
        variant === 'secondary' && 'bg-amber-600 hover:bg-amber-700 outline-amber-600',
      )}
      {...props}
    >
      {loading && (
        <svg
          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && children}
      {endIcon && <div className="flex-grow" />}
      {endIcon}
    </button>
  );
}

export default Button;
