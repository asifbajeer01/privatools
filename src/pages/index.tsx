import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const tools = [
  {
    title: 'Word & Character Counter',
    description: 'Count words, characters, sentences, paragraphs, and check social media limits in real time.',
    category: 'Text Tools',
    href: '/text/word-counter',
    badge: 'Popular',
  },
  {
    title: 'Percentage Calculator',
    description: 'Calculate standard percentages, proportions, and percentage increases or decreases instantly.',
    category: 'Calculators',
    href: '/calculators/percentage',
    badge: 'Popular',
  },
  {
    title: 'CSV Data Cleaner',
    description: 'Remove duplicate rows, trim whitespace, and clean spreadsheet data locally in browser memory.',
    category: 'Excel & Data',
    href: '/excel/csv-cleaner',
    badge: 'Data',
  },
];

export default function GlobalHomepage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter(tool =>
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <title>PrivaTools | Free Secure Online Productivity & Utility Platform</title>
        <meta name="description" content="100% free, privacy-first online tools for calculations, text processing, data cleaning, and career development. Zero server uploads." />
      </Head>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
              P
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Priva<span className="text-blue-600">Tools</span>
            </span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200 hidden sm:inline-block">
              100% Client-Side Secure
            </span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50/60 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Privacy-First Browser Utilities
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              All-in-One Online Utility Platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Fast, free, and privacy-first tools. Process text, perform calculations, and clean data directly in your browser memory without server uploads.
            </p>

            {/* Universal Search Input */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools (e.g., word counter, percentage, CSV)..."
                className="w-full pl-5 pr-12 py-4 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
              />
              <div className="absolute right-4 top-4 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Dashboard Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">Available Utilities ({filteredTools.length})</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTools.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.href}
                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-600 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {tool.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{tool.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center justify-between">
                  <span>Open Tool</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} PrivaTools. All rights reserved. 100% Client-Side Execution.</p>
        </div>
      </footer>
    </div>
  );
}
