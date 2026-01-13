'use client';

import { useAuthStore } from '@/store/authStore';
import { User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHeader() {
  const { user, bank } = useAuthStore();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="pb-6 animate-fade-up">
      <div className="flex p-5 py-1 items-center border-b border-b-[#03549b] bg-white justify-between">
        {/* <Image src="https://i.imgur.com/4AHXqKV.png" width={200} height={200} className="w-[130px] h-[30px]" alt="logo" /> */}
        <Image src="https://i.imgur.com/FulSPzu.png" width={72} height={72} className="w-[62px] h-[62px]" alt="logo" />

        <div className="flex items-center gap-3">
          {/* <Link
            href="/notifications"
            className="relative p-2.5 rounded-full bg-white transition-shadow"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#03549b] rounded-full border-2 border-card" />
          </Link> */}

          <Link href="/profile" className="p-2.5 rounded-full border border-gray-200 transition-shadow">
            <User className="w-5 h-5 text-black/80" />
          </Link>
        </div>
      </div>

      <div className="mt-5 px-5">
        <p className="text-gray-500 text-sm">{greeting},</p>
        <h1 className="text-2xl font-bold text-foreground">
          {user?.firstName} {user?.lastName}
        </h1>
        {bank && <p className="text-xs text-gray-500mt-0.5">{bank.name}</p>}
      </div>
    </header>
  );
}
