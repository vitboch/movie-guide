import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../context/AuthProvider';

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
      <body className='font-play'>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
