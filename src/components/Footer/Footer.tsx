import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='px-20 py-10 w-full h-30 md:px-10 md:py-5 md:h-20 sm:px-5 sm:h-15'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-stretch items-stretch gap-3 h-10'>
          <div className='flex justify-end items-center gap-6 w-full h-9 md:gap-4 sm:gap-3'>
            <a
              className='group block w-9 h-9 border border-gray-300 dark:border-white/80 rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 md:w-8 md:h-8 sm:w-7 sm:h-7'
              href='https://vk.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/vk.svg'
                alt='VK'
                width={36}
                height={36}
                className='w-full h-full object-contain brightness-50 dark:brightness-75 group-hover:brightness-100 transition-all duration-300'
              />
            </a>
            <a
              className='group block w-9 h-9 border border-gray-300 dark:border-white/80 rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 md:w-8 md:h-8 sm:w-7 sm:h-7'
              href='https://www.youtube.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/youtube.svg'
                alt='YouTube'
                width={36}
                height={36}
                className='w-full h-full object-contain brightness-50 dark:brightness-75 group-hover:brightness-100 transition-all duration-300'
              />
            </a>
            <a
              className='group block w-9 h-9 border border-gray-300 dark:border-white/80 rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 md:w-8 md:h-8 sm:w-7 sm:h-7'
              href='https://ok.ru'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/ok.svg'
                alt='Odnoklassniki'
                width={36}
                height={36}
                className='w-full h-full object-contain brightness-50 dark:brightness-75 group-hover:brightness-100 transition-all duration-300'
              />
            </a>
            <a
              className='group block w-9 h-9 border border-gray-300 dark:border-white/80 rounded-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 md:w-8 md:h-8 sm:w-7 sm:h-7'
              href='https://telegram.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/telegram.svg'
                alt='Telegram'
                width={36}
                height={36}
                className='w-full h-full object-contain brightness-50 dark:brightness-75 group-hover:brightness-100 transition-all duration-300'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
