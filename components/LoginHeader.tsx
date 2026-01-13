'use client';

import Image from 'next/image';

export default function LoginHeader() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-transparent border-b border-b-[#03549b] px-4 sm:px-15 py-2">
      <Image src="https://i.imgur.com/FulSPzu.png" width={72} height={72} className="w-[72px] h-[72px]" alt="logo" />
      <Image src="https://i.imgur.com/oOjiZMg.jpeg" width={250} height={72} className="" alt="logo" />{' '}
    </div>
  );
}
