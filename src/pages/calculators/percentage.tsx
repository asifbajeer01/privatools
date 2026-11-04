import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PercentageCalculatorTool() {
  // Mode 1: What is X% of Y?
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  
  // Mode 2: X is what % of Y?
  const [partVal, setPartVal] = useState('');
  const [totalVal, setTotalVal] = useState('');

  // Mode 3: Percentage Increase / Decrease
  const [origVal, setOrigVal] = useState('');
  const [finalVal, setFinalVal] = useState('');

  // Computations: an empty field means "no value yet"; 0 is a valid number.
  const toNum = (v: string): number | null => {
    if (v.trim() === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };
  const n1 = toNum(val1);
  const n2 = toNum(val2);
  const nPart = toNum(partVal);
  const nTotal = toNum(totalVal);
  const nOrig = toNum(origVal);
  const nFinal = toNum(finalVal);

  const result1 = n1 !== null && n2 !== null ? (n1 * n2) / 100 : null;
  // Division by zero has no defined result, so a total of 0 still shows "—".
  const result2 = nPart !== null && nTotal !== null && nTotal !== 0 ? (nPart / nTotal) * 100 : null;

  const diffNum = nOrig !== null && nFinal !== null ? nFinal - nOrig : null;
  // Percentage change from an original value of 0 is undefined.
  const pctChange = nOrig !== null && nOrig !== 0 && diffNum !== null ? (diffNum / nOrig) * 100 : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <title>Percentage Calculator | PrivaTools</title>
        <meta name="description" content="Calculate percentages instantly. Find proportions, standard percentages, and percentage increases or decreases locally." />
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
            <span className="capitalize">Calculators</span> <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">Percentage Calculator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Percentage Calculator</h1>
          <p className="mt-2 text-base text-slate-600">Calculate percentages instantly. Find proportions, standard values, and percentage increases or decreases.</p>
        </div>

        {/* Privacy Trust Badge */}
        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center space-x-3 text-emerald-800 text-sm">
          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span><strong>100% Secure & Private:</strong> Processed locally in your browser memory. Your numbers and data never touch our servers.</span>
        </div>

        {/* Main Tool Functional Interface Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-8 divide-y divide-slate-100">
          
          {/* Section 1: What is X% of Y? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-base font-semibold text-slate-900">1. Calculate Part from Percentage</h3>
              <p className="text-xs text-slate-500 mt-1">Calculate what a specific percentage of any number equals.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-700">What is</span>
              <input
                type="number"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                placeholder="15"
                className="w-20 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-medium text-slate-700">% of</span>
              <input
                type="number"
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
                placeholder="200"
                className="w-24 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-bold text-slate-900">=</span>
              <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-bold text-base min-w-[70px] text-center">
                {result1 !== null ? Number(result1.toFixed(2)) : '—'}
              </div>
            </div>
          </div>

          {/* Section 2: X is what % of Y? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900">2. Calculate Percentage Proportion</h3>
              <p className="text-xs text-slate-500 mt-1">Determine what percentage one number is of another.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3">
              <input
                type="number"
                value={partVal}
                onChange={(e) => setPartVal(e.target.value)}
                placeholder="25"
                className="w-20 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-medium text-slate-700">is what % of</span>
              <input
                type="number"
                value={totalVal}
                onChange={(e) => setTotalVal(e.target.value)}
                placeholder="100"
                className="w-24 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-bold text-slate-900">=</span>
              <div className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-bold text-base min-w-[70px] text-center">
                {result2 !== null ? `${Number(result2.toFixed(2))}%` : '—'}
              </div>
            </div>
          </div>

          {/* Section 3: Percentage Increase / Decrease */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900">3. Percentage Increase / Decrease</h3>
              <p className="text-xs text-slate-500 mt-1">Calculate the percentage change between an initial and final value.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-700">From</span>
              <input
                type="number"
                value={origVal}
                onChange={(e) => setOrigVal(e.target.value)}
                placeholder="50"
                className="w-20 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-medium text-slate-700">to</span>
              <input
                type="number"
                value={finalVal}
                onChange={(e) => setFinalVal(e.target.value)}
                placeholder="75"
                className="w-20 px-3 py-2 border border-slate-300 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white"
              />
              <span className="text-sm font-bold text-slate-900">=</span>
              <div className={`px-4 py-2 rounded-lg font-bold text-base min-w-[90px] text-center border ${pctChange !== null && pctChange >= 0 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'}`}>
                {pctChange !== null ? `${pctChange > 0 ? '+' : ''}${pctChange.toFixed(2)}%` : '—'}
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
