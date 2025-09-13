'use client';

import { useTheme } from '@/hooks/use-theme';
import { LogoIcon } from '@/components/ui/Icon';

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
        <p className='text-gray-600 dark:text-gray-300 transition-colors duration-300'>
          Current theme: {resolvedTheme}
        </p>
      </div>
    </div>
  );
}
