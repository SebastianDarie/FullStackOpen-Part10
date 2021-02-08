import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { IS_AUTH } from '../graphql/queries';
import RepositoryView from './RepositoryView';

const UserReviews = () => {
  const { data, loading } = useQuery(IS_AUTH, {
    variables: { includeReviews: true },
  });

  let reviews;

  if (data?.authorizedUser) {
    reviews = data.authorizedUser.reviews.edges.map(({ node }) => node);
  }

  return <RepositoryView reviews={reviews} loading={loading} />;
};

export default UserReviews;
