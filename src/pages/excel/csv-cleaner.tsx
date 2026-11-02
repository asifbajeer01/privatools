import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CSVCleanerTool() {
  const [rawCsv, setRawCsv] = useState('');
  const [cleanedCsv, setCleanedCsv] = useState('');
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [trimSpaces, setTrimSpaces] = useState(true);
  const [removeEmptyRows, setRemoveEmptyRows] = useState(true);
  const [stats, setStats] = useState<{ original: number; cleaned: number; removed: number } | null>(null);

  const processCSV = () => {
    if (!rawCsv.trim()) return;

    let lines = rawCsv.split(/\r\n|\n/);
    const originalCount = lines.length;

    if (trimSpaces) {
      lines = lines.map(line => 
        line.split(',').map(cell => cell.trim()).join(',')
      );
    }

    if (removeEmptyRows) {
      lines = lines.filter(line => line.trim() !== '' && line.replace(/,/g, '').trim() !== '');
    }

    if (removeDuplicates) {
      lines = Array.from(new Set(lines));
    }

    const cleanedResult = lines.join('\n');
    setCleanedCsv(cleanedResult);
    setStats({
      original: originalCount,
      cleaned: lines.length,
      removed: originalCount - lines.length,
    });
  };

  const handleDownload = () => {
    const blob = new Blob([cleanedCsv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cleaned_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Head>
        <title>CSV Data Cleaner | PrivaTools</title>
        <meta name="description" content="Clean CSV data, remove duplicate rows, and trim whitespace locally in your browser memory." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
        <div className="mb-6">
          <nav className="text-sm text-slate-500 mb-2">
            <Link href="/" className="hover:underline">Home</Link> <span className="mx-2">/</span>
            <span className="capitalize">Excel & Data</span> <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">CSV Cleaner</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">CSV Data Cleaner</h1>
          <p className="mt-2 text-base text-slate-600">Remove duplicate rows, eliminate blank lines, and trim extra whitespace from your spreadsheets.</p>
        </div>

        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center space-x-3 text-emerald-800 text-sm">
          <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span><strong>100% Secure & Private:</strong> Processing happens locally in your browser memory. Data is never uploaded to any server.</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
          {/* Cleaning Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={removeDuplicates}
                onChange={(e) => setRemoveDuplicates(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <span>Remove Duplicate Rows</span>
            </label>
            <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={trimSpaces}
                onChange={(e) => setTrimSpaces(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <span>Trim Cell Whitespace</span>
            </label>
            <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={removeEmptyRows}
                onChange={(e) => setRemoveEmptyRows(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <span>Remove Empty Lines</span>
            </label>
          </div>

          {/* Text Areas Input & Output */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Paste Raw CSV Content:</label>
              <textarea
                rows={10}
                value={rawCsv}
                onChange={(e) => setRawCsv(e.target.value)}
                placeholder="Name, Email, City&#10;John, john@example.com, Karachi &#10;John, john@example.com, Karachi "
                className="w-full px-4 py-3 border border-slate-300 rounded-xl font-mono text-xs text-slate-800 focus:ring-2 focus:ring-blue-600 outline-none resize-y"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Cleaned CSV Result:</label>
              <textarea
                rows={10}
                readOnly
                value={cleanedCsv}
                placeholder="Cleaned CSV output will appear here..."
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 rounded-xl font-mono text-xs text-slate-800 outline-none resize-y"
              />
            </div>
          </div>

          {/* Control Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
            {stats ? (
              <div className="text-xs text-slate-600 flex items-center space-x-4">
                <span>Original Rows: <strong>{stats.original}</strong></span>
                <span>Cleaned Rows: <strong>{stats.cleaned}</strong></span>
                <span className="text-emerald-600">Removed: <strong>{stats.removed}</strong></span>
              </div>
            ) : <div />}

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={processCSV}
                disabled={!rawCsv.trim()}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition disabled:opacity-50 shadow-sm"
              >
                Clean Data
              </button>
              <button
                onClick={handleDownload}
                disabled={!cleanedCsv}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm transition disabled:opacity-50 shadow-sm"
              >
                Download CSV
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} PrivaTools. All rights reserved. Client-Side Secure Execution.</p>
        </div>
      </footer>
    </div>
  );
}
