import { useContext } from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useAuth = () => {
  const context = useContext(AuthStorageContext);

  return context;
};

export default useAuth;
