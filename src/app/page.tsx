'use client';

import { Footer } from '@/components/Footer';
import { Icon } from '@/components/ui/Icon';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-500/90 via-purple-500/90 to-black/70'>
      {/* Header */}
      <header className='absolute top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20'>
        <div className='max-w-7xl mx-auto px-20 py-6'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div className='flex items-center gap-20'>
              <Icon
                className='w-32 h-32'
                name='logo-dark'
                aria-label='Movie Guide Logo'
              />
              <nav className='flex items-center gap-10'>
                <a
                  href='#'
                  className='text-white text-xl font-play border-b-2 border-[#dc5dfc] pb-2'
                >
                  Главная
                </a>
                <a
                  href='#'
                  className='text-white text-xl font-play hover:text-gray-300'
                >
                  Жанры
                </a>
                <div className='flex items-center gap-3 bg-gray-800/50 rounded-lg px-4 py-3 flex-1 min-w-64'>
                  <svg
                    className='w-5 h-5 text-white/50'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  <input
                    type='text'
                    placeholder='Поиск'
                    className='bg-transparent text-white placeholder-white/50 outline-none flex-1'
                  />
                </div>
                <a
                  href='#'
                  className='text-white text-xl font-play hover:text-gray-300'
                >
                  Войти
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-20 pt-32'>
        <h1 className='sr-only'>Movie Guide - Главная страница</h1>
        <div className='max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center'>
          {/* Movie Image */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-2xl'></div>
            <Image
              src='/images/sherlock-holmes.jpg'
              alt='Шерлок Холмс и доктор Ватсон: Знакомство'
              width={680}
              height={552}
              className='rounded-2xl w-full h-auto'
            />
          </div>

          {/* Movie Info */}
          <div className='space-y-15'>
            {/* Movie Meta */}
            <div className='flex flex-wrap items-center gap-4'>
              <div className='flex items-center gap-1 bg-green-600 px-3 py-1 rounded-2xl'>
                <svg
                  className='w-4 h-4 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <span className='text-white font-play font-bold text-lg'>
                  7,5
                </span>
              </div>
              <span className='text-white/70 font-play text-lg'>1979</span>
              <span className='text-white/70 font-play text-lg'>детектив</span>
              <span className='text-white/70 font-play text-lg'>1 ч 7 мин</span>
            </div>

            {/* Movie Title */}
            <h2 className='text-white font-play font-bold text-5xl leading-tight'>
              Шерлок Холмс и доктор Ватсон: Знакомство
            </h2>

            {/* Movie Description */}
            <p className='text-white/70 font-play text-2xl leading-relaxed'>
              Увлекательные приключения самого известного сыщика всех времен
            </p>

            {/* Action Buttons */}
            <div className='flex items-center gap-4'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-play font-bold px-12 py-4 rounded-3xl transition-colors duration-300'>
                Трейлер
              </button>
              <button className='bg-gray-800/50 border border-black/40 text-white font-play font-bold px-12 py-4 rounded-3xl hover:bg-gray-700/50 transition-colors duration-300'>
                О фильме
              </button>
              <button
                className='w-17 h-14 bg-gray-800/50 border border-black/40 rounded-3xl flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300'
                aria-label='Добавить в избранное'
              >
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                </svg>
              </button>
              <button
                className='w-17 h-14 bg-gray-800/50 border border-black/40 rounded-3xl flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300'
                aria-label='Поставить лайк'
              >
                <svg
                  className='w-6 h-6 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Movies Section */}
      <section className='py-20 px-20'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-white font-play font-bold text-4xl mb-16 text-center'>
            Топ 10 фильмов
          </h2>

          <div className='grid grid-cols-5 gap-10 mb-10'>
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className='relative group cursor-pointer'>
                <div className='w-56 h-84 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-white/33 border border-white/25'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-700 to-gray-900'></div>
                </div>
                <div className='absolute -top-3 -left-3 bg-white rounded-full px-6 py-2 shadow-lg'>
                  <span className='text-purple-600 font-play font-bold text-2xl'>
                    {num}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-5 gap-10'>
            {[6, 7, 8, 9, 10].map(num => (
              <div key={num} className='relative group cursor-pointer'>
                <div className='w-56 h-84 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-white/33 border border-white/25'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-700 to-gray-900'></div>
                </div>
                <div className='absolute -top-3 -left-3 bg-white rounded-full px-6 py-2 shadow-lg'>
                  <span className='text-purple-600 font-play font-bold text-2xl'>
                    {num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
