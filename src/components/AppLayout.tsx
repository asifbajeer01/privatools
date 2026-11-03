import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="app-page-content flex-1">{children}</div>
      <footer className="bg-white border-t border-slate-200 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} PrivaTools. All rights reserved. Client-Side Secure Execution.</p>
        </div>
      </footer>
    </div>
  );
}
