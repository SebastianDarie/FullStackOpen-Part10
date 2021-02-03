import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { convertThousands } from '../../utils/functions';
import theme from '../../theme';

const RepositoryStats = ({
  id,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={[styles.infoContainer, styles.repoStats]}>
      <View style={styles.individualStat}>
        <Text style={styles.boldText} testID={`${id}/stars`}>
          {convertThousands(stargazersCount)}
        </Text>
        <Text style={styles.text}>Stars</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText} testID={`${id}/forks`}>
          {convertThousands(forksCount)}
        </Text>
        <Text style={styles.text}>Forks</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText} testID={`${id}/reviewCount`}>
          {reviewCount}
        </Text>
        <Text style={styles.text}>Reviews</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText} testID={`${id}/ratingAvg`}>
          {ratingAverage}
        </Text>
        <Text style={styles.text}>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },

  repoStats: {
    justifyContent: 'space-around',
  },

  individualStat: {
    alignItems: 'center',
  },

  text: {
    color: theme.colors.textSecondary,
  },

  boldText: {
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});

export default RepositoryStats;
