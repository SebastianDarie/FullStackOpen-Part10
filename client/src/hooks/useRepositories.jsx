import { useQuery } from '@apollo/react-hooks';
import { GET_REPOS } from '../graphql/queries';

const criteriaOptions = {
  latest_repos: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highest_rated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowest_rated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
};

const useRepositories = ({ criteria, filter, first }) => {
  const sortAndFilter = {
    ...criteriaOptions[criteria],
    filter,
  };

  const { data, loading, fetchMore } = useQuery(GET_REPOS, {
    fetchPolicy: 'cache-and-network',
    variables: { first, ...sortAndFilter },
  });

  let repositories = [];

  if (data) {
    repositories = data.repositories.edges.map(({ node }) => node);
  }

  const handleFetchMore = async () => {
    if (filter) return;

    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.log(canFetchMore);

      return;
    }

    await fetchMore({
      query: GET_REPOS,
      variables: {
        after: data?.repositories.pageInfo.endCursor,
        first,
        ...sortAndFilter,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newRepos = fetchMoreResult?.repositories;

        if (!newRepos) {
          return previousResult;
        }

        const nextRepos = {
          repositories: {
            ...previousResult.repositories,
            edges: [...previousResult.repositories.edges, ...newRepos.edges],
            pageInfo: newRepos.pageInfo,
          },
        };

        return nextRepos;
      },
    });
  };

  return { repositories, loading, handleFetchMore };
};

export default useRepositories;
