import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories(sorting);
  const [sorting, setSorting] = useState('latest_repos');

  return (
    <RepositoryListContainer
      repositories={repositories}
      criteria={sorting}
      setCriteria={setSorting}
    />
  );
};

export default RepositoryList;
