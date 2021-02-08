import React from 'react';
import { View, FlatList, Text } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const RepositoryView = ({
  repo,
  reviews = [],
  github = false,
  handleFetchMore,
  loading,
}) => {
  const listHeaderComponent = repo ? (
    <>
      <RepositoryInfo repository={repo} github={github} />
    </>
  ) : null;

  return reviews.length ? (
    <>
      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <ReviewItem review={item} reviewsPage={!repo} />
        )}
        ListHeaderComponent={listHeaderComponent}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.1}
      />
      {loading && <Text>Loading more reviews ...</Text>}
    </>
  ) : (
    listHeaderComponent
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

export default RepositoryView;
