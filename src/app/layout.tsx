import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { homeContent } from '@/screens/home/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: homeContent.token.tokenName,
  description:
    'A happinest cat on Solana, on a mission to be worth billyons and billyons!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
