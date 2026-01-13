import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HeaderComp({ title = '' }) {
  return (
    <header className="px-5 pt-5 pb-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 group rounded-full hover:bg-[#03549b] transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        </div>
      </div>
    </header>
  );
}
