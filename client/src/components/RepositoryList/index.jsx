import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [filter, setFilter] = useState('');
  const [sorting, setSorting] = useState('latest_repos');
  const { repositories, loading, handleFetchMore } = useRepositories({
    criteria: sorting,
    filter,
    first: 4,
  });

  const onEndReached = () => {
    handleFetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      criteria={sorting}
      setCriteria={setSorting}
      filter={filter}
      setFilter={setFilter}
      loading={loading}
      onEndReached={onEndReached}
    />
  );
};

export default RepositoryList;
