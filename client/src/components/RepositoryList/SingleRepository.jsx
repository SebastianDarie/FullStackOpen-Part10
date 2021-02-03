import React from 'react';
import { Text } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepo from '../../hooks/useSingleRepo';
import RepositoryView from '../RepositoryView';

const SingleRepository = () => {
  const { id } = useParams();
  const { repo, loading } = useSingleRepo(id);

  let reviewData;

  if (repo) {
    reviewData = repo?.reviews.edges.map(({ node }) => node);
  }

  if (loading) {
    return <Text>loading...</Text>;
  }

  return <RepositoryView repo={repo} reviews={reviewData} github />;
};

export default SingleRepository;
