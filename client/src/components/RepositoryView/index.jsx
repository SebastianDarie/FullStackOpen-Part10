import React from 'react';
import { View, FlatList } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const RepositoryView = ({ repo, reviews = [], github = false }) => {
  if (!repo) return <div>not found</div>;

  return reviews.length ? (
    <>
      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ListHeaderComponent={
          <>
            <RepositoryInfo repository={repo} github={github} />
            <ItemSeparator />
          </>
        }
      />
    </>
  ) : (
    <RepositoryInfo repository={repo} github={github} />
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

export default RepositoryView;
