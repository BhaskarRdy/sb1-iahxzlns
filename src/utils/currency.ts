export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Convert USD prices to INR (using a fixed rate for demonstration)
export const usdToInr = (usdAmount: number): number => {
  const conversionRate = 83;
  return Math.round(usdAmount * conversionRate);
};