import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-native';
import RepositoryView from '../RepositoryView';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  return (
    <FlatList
      data={repositories}
      keyExtractor={(repo) => repo.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => history.push(`/${item.id}`)}>
          <View>
            <RepositoryView repo={item} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RepositoryListContainer;
