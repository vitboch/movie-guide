'use client';

import React, { forwardRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon, error = false, label, helperText, className = '', ...props },
    ref
  ) => {
    const { resolvedTheme } = useTheme();
    const themeClass = resolvedTheme === 'dark' ? 'dark' : 'light';

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className='block text-body-14 text-light-content-secondary dark:text-dark-content-secondary mb-2 font-play'>
            {label}
          </label>
        )}
        <div
          className={`
            flex items-center gap-input-gap px-input-padding py-input-padding rounded-input
            ${
              themeClass === 'dark'
                ? 'bg-dark-surface border border-dark-border'
                : 'bg-light-surface border border-light-border'
            }
            ${
              error
                ? themeClass === 'dark'
                  ? 'border-dark-content-error'
                  : 'border-light-content-error'
                : ''
            }
            ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {icon && (
            <div className='flex-shrink-0 text-light-content-secondary dark:text-dark-content-secondary'>
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className='flex-1 bg-transparent text-light-content-primary dark:text-dark-content-primary placeholder:text-light-content-placeholder dark:placeholder:text-dark-content-placeholder outline-none'
            {...props}
          />
        </div>
        {helperText && (
          <p
            className={`text-body-12 mt-1 ${
              error
                ? 'text-light-content-error dark:text-dark-content-error'
                : 'text-light-content-secondary dark:text-dark-content-secondary'
            }`}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
