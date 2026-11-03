import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <div className="app-page-content flex-1">{children}</div>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-slate-500">
            PrivaTools — Privacy-first online utilities.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Your files stay in your browser.
          </p>
        </div>
      </footer>
    </div>
  );
}
