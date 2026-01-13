'use client';

import { CreditCard } from 'lucide-react';
import BottomNavigation from '@/components/dashboard/BottomNavigation';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { getCardsByUserId } from '@/lib/helper-fns';
import HeaderComp from '@/components/HeaderComp';
import { formatCurrency } from '@/components/formatCurrency';
import DebitCard from '@/components/DebitCard';

export default function Cards() {
  const { user } = useAuthStore();
  const router = useRouter();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const _hasHydrated = useAuthStore(state => state._hasHydrated);

  useEffect(() => {
    if (_hasHydrated && !isAuthenticated) {
      router.push('/login');
    }
  }, [_hasHydrated, isAuthenticated, router]);

  const cards = useMemo(() => {
    return user?.id ? getCardsByUserId(user.id) : [];
  }, [user]);

  if (!_hasHydrated || !isAuthenticated) {
    return null;
  }

  const formatCardNumber = (num: string) => {
    return '•••• •••• •••• ' + num.slice(-4);
  };

  const getCardColor = (cardType: string, isPrimary: boolean) => {
    if (isPrimary && cardType === 'debit') {
      return 'bg-[#03549b] text-white';
    }
    if (cardType === 'credit') {
      return 'bg-[#223e99] text-white';
    }
    return 'bg-white text-black';
  };

  return (
    <div className="min-h-screen bg-background pb-52">
      {/* Header */}
      <HeaderComp title="My Cards" />

      {/* Cards List */}
      <section className="px-5 space-y-4 animate-fade-up stagger-1">
        {cards.length > 0 ? (
          cards.map(card => (
            <div key={card.id} className={``}>
              <DebitCard cardNumber={`${formatCardNumber(card.cardNumber)}`} cardHolder={`${user?.firstName} ${user?.lastName}`} expiryDate={card.expiryDate} />
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No cards found</p>
          </div>
        )}
      </section>

      {/* Add New Card */}
      {/* <section className="px-5 mt-6 animate-fade-up stagger-3">
        <button className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary hover:bg-[#da1b28]/5 transition-all">
          <Plus className="w-5 h-5 text-gray-500" />
          <span className="font-medium text-gray-500">Add New Card</span>
        </button>
      </section> */}

      <BottomNavigation />
    </div>
  );
}
