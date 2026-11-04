import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function WordCounterTool() {
  const [text, setText] = useState('');

  // Calculations
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.trim() === '' ? 0 : text.split(/\n+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200); // average 200 words per minute

  const handleClear = () => setText('');
  const handleCopy = () => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <title>Word & Character Counter | PrivaTools</title>
        <meta name="description" content="Count words, characters, sentences, and paragraphs in real time. Processed instantly in your browser." />
      </Head>

      {/* Header */}
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
          <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
            <span>100% Free • No Login</span>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb & Category */}
        <div className="mb-6">
          <nav className="text-sm text-slate-500 mb-2">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span>
            <span className="capitalize">Text Tools</span> <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">Word Counter</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Word & Character Counter</h1>
          <p className="mt-2 text-base text-slate-600">Count words, characters, sentences, and paragraphs in real time. Processed instantly in your browser.</p>
        </div>

        {/* Privacy Trust Badge */}
        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center space-x-3 text-emerald-800 text-sm">
          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span><strong>100% Secure & Private:</strong> Processed locally in your browser memory. Your files and data never touch our servers.</span>
        </div>

        {/* Main Tool Functional Interface Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600">{words}</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Words</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800">{characters}</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Characters</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800">{sentences}</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Sentences</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-slate-800">{readingTime} min</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Read Time</span>
            </div>
          </div>

          {/* Textarea Input */}
          <div>
            <label htmlFor="source-text" className="block text-sm font-medium text-slate-700 mb-2">
              Paste or type your text below:
            </label>
            <textarea
              id="source-text"
              rows={8}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your content here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition text-sm text-slate-800 resize-y"
            />
          </div>

          {/* Action Buttons & Secondary Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center space-x-3 text-xs text-slate-500">
              <span>Characters (no spaces): <strong>{charactersNoSpaces}</strong></span>
              <span>•</span>
              <span>Paragraphs: <strong>{paragraphs}</strong></span>
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                disabled={!text}
                className="flex-1 sm:flex-none px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-sm transition disabled:opacity-50"
              >
                Copy Text
              </button>
              <button
                onClick={handleClear}
                disabled={!text}
                className="flex-1 sm:flex-none px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-medium rounded-lg text-sm transition disabled:opacity-50"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Social Media Character Limit Indicators */}
          <div className="border-t border-slate-100 pt-6 mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Platform Limits Check</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className={`p-3 rounded-lg border ${characters <= 280 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                <span className="block font-semibold">X / Twitter (280)</span>
                <span>{280 - characters >= 0 ? `${280 - characters} left` : `${Math.abs(280 - characters)} over`}</span>
              </div>
              <div className={`p-3 rounded-lg border ${characters <= 2200 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                <span className="block font-semibold">Instagram Caption (2.2k)</span>
                <span>{2200 - characters >= 0 ? `${2200 - characters} left` : 'Over limit'}</span>
              </div>
              <div className={`p-3 rounded-lg border ${characters <= 3000 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                <span className="block font-semibold">LinkedIn Post (3k)</span>
                <span>{3000 - characters >= 0 ? `${3000 - characters} left` : 'Over limit'}</span>
              </div>
              <div className="p-3 rounded-lg border bg-slate-50 border-slate-200 text-slate-700">
                <span className="block font-semibold">Standard SMS</span>
                <span>{Math.ceil(characters / 160) || 1} message(s)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} PrivaTools. All rights reserved. Client-Side Secure Execution.</p>
        </div>
      </footer>
    </div>
  );
}
