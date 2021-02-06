import { useQuery } from '@apollo/react-hooks';
import { GET_REPOS } from '../graphql/queries';

const criteriaOptions = {
  latest_repos: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest_rated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest_rated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

const useRepositories = ({ criteria, filter }) => {
  const { data, loading, refetch } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
    variables: { ...criteriaOptions[criteria], filter },
  });

  let repositories = [];

  if (data) {
    repositories = data.repositories.edges.map(({ node }) => node);
  }

  return { repositories, loading, refetch };
};

export default useRepositories;
