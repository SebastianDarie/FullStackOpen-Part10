import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [filter, setFilter] = useState('');
  const [sorting, setSorting] = useState('latest_repos');
  const { repositories } = useRepositories({ criteria: sorting, filter });

  return (
    <RepositoryListContainer
      repositories={repositories}
      criteria={sorting}
      setCriteria={setSorting}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
