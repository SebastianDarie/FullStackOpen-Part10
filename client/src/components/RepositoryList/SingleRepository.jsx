import React from 'react';
import { useParams } from 'react-router-native';
import useSingleRepo from '../../hooks/useSingleRepo';
import RepositoryView from '../RepositoryView';

const SingleRepository = () => {
  const { id } = useParams();
  const { repo, loading, handleFetchMore } = useSingleRepo({ id, first: 4 });

  const reviewData = repo?.reviews.edges.map(({ node }) => node);

  return (
    <RepositoryView
      repo={repo}
      reviews={reviewData}
      handleFetchMore={handleFetchMore}
      loading={loading}
      github
    />
  );
};

export default SingleRepository;
