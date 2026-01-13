'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import AccountsCarousel from '@/components/dashboard/AccountsCarousel';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import BottomNavigation from '@/components/dashboard/BottomNavigation';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const _hasHydrated = useAuthStore(state => state._hasHydrated);

  useEffect(() => {
    if (_hasHydrated && !isAuthenticated) {
      router.push('/login');
    }
  }, [_hasHydrated, isAuthenticated, router]);

  if (!_hasHydrated || !isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-28">
      <DashboardHeader />
      <AccountsCarousel />
      <QuickActions />
      <RecentTransactions />
      <BottomNavigation />
      <div className="border flex flex-col gap-4 p-6 px-4 mt-5">
        <div className="border flex flex-col gap-4 bg-white overflow-hidden mt-10">
          <Image src="https://i.imgur.com/kDRLbf0.jpeg" width={5000} height={5000} className="" alt="sjsusbnnsn" />

          <div className="text-center text-black p-3 px-7 pb-7">
            <span className="font-bold">Association Banking</span> <br />
            <span>Personalized, expert assistance for property managers.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
