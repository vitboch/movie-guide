import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Movie Guide',
  description: 'Movie Guide Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-play'>{children}</body>
    </html>
  );
}
