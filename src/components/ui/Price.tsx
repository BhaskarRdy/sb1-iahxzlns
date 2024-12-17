import React from 'react';
import { formatCurrency } from '../../utils/currency';

interface PriceProps {
  amount: number;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({ amount, className = '' }) => {
  return <span className={className}>{formatCurrency(amount)}</span>;
};