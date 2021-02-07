import { useQuery } from '@apollo/react-hooks';
import { GET_REPO } from '../graphql/queries';

const useSingleRepo = ({ id, first }) => {
  const { data, loading, fetchMore } = useQuery(GET_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { id, first },
  });

  let repo;

  if (data) {
    repo = data.repository;
  }

  const handleFetchMore = async () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.log(canFetchMore);
      return;
    }

    await fetchMore({
      query: GET_REPO,
      variables: {
        id,
        after: data?.repository.reviews.pageInfo.endCursor,
        first,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newReviews = fetchMoreResult?.repository.reviews;

        if (!newReviews) {
          return previousResult;
        }

        const nextReviews = {
          repository: {
            ...previousResult.repository,
            reviews: {
              ...previousResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...newReviews.edges,
              ],
            },
            pageInfo: newReviews.pageInfo,
          },
        };

        return nextReviews;
      },
    });
  };

  return { repo, loading, handleFetchMore };
};

export default useSingleRepo;
