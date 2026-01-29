import { TransactionStatus } from '@/types/userTypes';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

interface TransactionItemProps {
  id?: string;
  merchant: string;
  category: string;
  date: string;
  amount: number;
  status: TransactionStatus;
  onClick?: () => void;
}

const statusConfig: Record<
  TransactionStatus,
  {
    label: string;
    color: string;
    amountColor: string;
  }
> = {
  success: {
    label: 'Success',
    color: 'bg-[#1fad53]/10 text-[#1fad53]',
    amountColor: 'text-[#1fad53]' // Green for success CREDITS
  },
  pending: {
    label: 'Pending',
    color: 'bg-blue-500/10 text-blue-500',
    amountColor: 'text-blue-500' // Blue for pending
  },
  failed: {
    label: 'Failed',
    color: 'bg-[#ef4343]/10 text-[#ef4343]',
    amountColor: 'text-[#ef4343]' // Red for failed
  },
  canceled: {
    label: 'Canceled',
    color: 'bg-muted text-gray-500',
    amountColor: 'text-gray-500' // Gray for canceled
  },
  processing: {
    label: 'Processing',
    color: 'bg-warning/10 text-warning',
    amountColor: 'text-warning' // Warning color
  }
};

const TransactionItem = ({ merchant, category, date, amount, status, onClick }: TransactionItemProps) => {
  const isCredit = amount >= 0;
  const Icon = isCredit ? ArrowDownLeft : ArrowUpRight;
  const statusInfo = statusConfig[status];
  
  // FIX: Use the boolean directly, not as a function
  const iconBg = isCredit ? 'bg-[#1fad53]/10 text-[#1fad53]' : 'bg-[#ef4343]/10 text-[#ef4343]';

  const formatCurrency = (value: number) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Math.abs(value));
    return value >= 0 ? `+${formatted}` : `-${formatted}`;
  };

  return (
    <div onClick={onClick} className="flex gap-3 py-3 border-b border-gray-200/50 last:border-0 hover:bg-[#b40520]/30 -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
      <div className={`p-2.5 h-10 rounded-xl ${iconBg}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="font-medium text-foreground">{merchant}</p>
        </div>
        <p className="text-xs text-gray-500">
          {category} • {date}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p className={`font-semibold text-sm text-balance ${isCredit ? 'text-[#1fad53]' : 'text-foreground'}`}>
          {formatCurrency(amount)}
        </p>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusInfo.color}`}>
          {statusInfo.label}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem;