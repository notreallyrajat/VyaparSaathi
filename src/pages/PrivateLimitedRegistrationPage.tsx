import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PricingPage } from './PricingPage';

export const PrivateLimitedRegistrationPage: React.FC = () => {
  const [, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setSearchParams({ category: 'pvt-ltd' }, { replace: true });
  }, [setSearchParams]);

  return <PricingPage />;
};
