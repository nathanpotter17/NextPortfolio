'use client';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter_Tight } from 'next/font/google';
import { Navbar } from '../../components/ui/navbar';
import { Footer } from '../../components/ui/footer';

const inter = Inter_Tight({ subsets: ['latin'], variable: '--inter-tight' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} font-[family-name:var(--inter-tight)]`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
