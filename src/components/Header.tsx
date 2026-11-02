import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-extrabold text-slate-900">
          Priva<span className="text-blue-600">Tools</span>
        </span>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          100% Free • Secure
        </span>
      </div>
    </header>
  );
}
