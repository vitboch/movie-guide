'use client';

import { useTheme } from '@/hooks/use-theme';
import { LogoIcon, Rating } from '@/components/ui/Icon';

export default function HomePage() {
  const { resolvedTheme } = useTheme();

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300'>
      <div className='text-center'>
        <div className='mb-6 flex justify-center'>
          <LogoIcon
            size='large'
            className='w-32 h-32'
            aria-label='Movie Guide Logo'
          />
        </div>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300'>
          Movie Guide
        </h1>
        <p className='text-gray-600 dark:text-gray-300 transition-colors duration-300 mb-6'>
          Current theme: {resolvedTheme}
        </p>

        <div className='space-y-4'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Rating Examples
          </h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Rating value={8.6} size='large' />
            <Rating value={7.5} size='large' />
            <Rating value={6.3} size='large' />
            <Rating value={4.2} size='large' />
          </div>
          <div className='flex flex-wrap gap-2 justify-center'>
            <Rating value={8.6} size='small' />
            <Rating value={7.5} size='small' />
            <Rating value={6.3} size='small' />
            <Rating value={4.2} size='small' />
          </div>
        </div>
      </div>
    </div>
  );
}
