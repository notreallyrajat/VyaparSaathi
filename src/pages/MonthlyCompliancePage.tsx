import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PricingPage } from './PricingPage';

export const MonthlyCompliancePage: React.FC = () => {
  const [, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setSearchParams({ category: 'monthly' }, { replace: true });
  }, [setSearchParams]);

  return <PricingPage />;
};
