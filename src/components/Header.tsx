import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="PrivaTools home">
          <span className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md" aria-hidden="true">P</span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Priva<span className="text-blue-600">Tools</span>
          </span>
        </Link>
        <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200 hidden sm:inline-block">
          100% Client-Side Secure
        </span>
      </div>
    </header>
  );
}
