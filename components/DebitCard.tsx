import { useState } from 'react';
import { Wifi } from 'lucide-react';
import Image from 'next/image';

interface DebitCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

const DebitCard = ({ cardNumber = '**** **** **** 7890', cardHolder = 'JAMES ANDERSON', expiryDate = '12/28', cvv = '***' }: DebitCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      className="bg-sky-950 relative shadow-sm rounded-2xl p-6 pt-2 cursor-pointer transition-all duration-300 ease-out transform-style-3d"
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovering ? 'scale(1.02)' : 'scale(1)'}`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Top Row - Logo and Contactless */}
      <div className="flex justify-between items-center mb-2">
        {/* Nova Bank Logo */}
        <div className="flex items-center gap-2">
          <Image src="https://i.imgur.com/FulSPzu.png" width={72} height={72} className="w-[72px] h-[72px]" alt="logo" />
        </div>

        {/* Contactless Icon */}
        <div className="text-white-muted">
          <Wifi className="w-8 h-8 text-white rotate-90" strokeWidth={1.5} />
        </div>
      </div>

      {/* Chip */}
      <div className="mb-2">
        <div className="card-chip w-12 h-10 rounded-lg flex items-center justify-center">
          <div className="w-8 h-6 border border-amber-800/30 rounded-sm grid grid-cols-3 gap-px p-0.5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-amber-700/20 rounded-[1px]"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div className="mb-2">
        <p className="text-white text-[22px] font-medium">{cardNumber}</p>
      </div>

      {/* Bottom Row - Cardholder and Expiry */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-white text-[10px] tracking-wider mb-1 uppercase">Card Holder</p>
          <p className="text-white text-sm font-medium uppercase tracking-wide">{cardHolder}</p>
        </div>

        <div className="text-right">
          <p className="text-white text-[10px] tracking-wider mb-1 uppercase">Expires</p>
          <p className="text-white text-sm font-medium tracking-wide font-['Space_Grotesk']">{expiryDate}</p>
        </div>

        {/* Card Network Logo */}
        <div className="flex items-center -mr-1">
          <div className="w-8 h-8 rounded-full bg-red-500/90 -mr-2"></div>
          <div className="w-8 h-8 rounded-full bg-amber-500/90"></div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default DebitCard;
