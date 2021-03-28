import useAuthenticated from 'app/hooks/use-authenticated';
import React from 'react';
const PrivateLayout: React.FC = () => {
  const authenticated = useAuthenticated();
  // @TODO redirect to home if not authenticated
  return <></>;
};

export default PrivateLayout;
