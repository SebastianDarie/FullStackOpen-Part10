import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withRouter } from 'react-router-native';
import RepositoryView from '../RepositoryView';
import FilterInput from './FilterInput';
import SortingMenu from './SortingMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends Component {
  renderHeaderComponent = () => {
    const { criteria, setCriteria, filter, setFilter } = this.props;
    return (
      <>
        <FilterInput filter={filter} setFilter={setFilter} />
        <SortingMenu criteria={criteria} setCriteria={setCriteria} />
      </>
    );
  };

  render() {
    const { history, loading, onEndReached, repositories } = this.props;

    const renderItem = ({ item: repo }) => {
      return (
        <TouchableOpacity onPress={() => history.push(`/${repo.id}`)}>
          <View>
            <RepositoryView repo={repo} />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <>
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={this.renderHeaderComponent}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
        {loading && <Text>Loading repos...</Text>}
      </>
    );
  }
}

export default withRouter(RepositoryListContainer);
