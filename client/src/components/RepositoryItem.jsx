import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.default,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },

  imageContainer: {
    flex: 2,
    marginLeft: 5,
  },

  imageStyle: {
    borderRadius: 4,
    height: 48,
    width: 48,
  },

  repoInfo: {
    flex: 9,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },

  text: {
    color: theme.colors.textSecondary,
  },

  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    color: theme.colors.default,
    marginTop: 5,
    padding: 5,
  },

  repoStats: {
    justifyContent: 'space-around',
  },

  individualStat: {
    alignItems: 'center',
  },

  boldText: {
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});

const RepositoryItem = ({ repo }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repo;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{ uri: ownerAvatarUrl }} />
        </View>

        <View style={styles.repoInfo}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>

      <RepoStats
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  );
};

const RepoStats = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const convertThousands = (num) => {
    return num >= 1000 ? `${Math.round(num / 100) / 10}k` : num;
  };

  return (
    <View style={[styles.infoContainer, styles.repoStats]}>
      <View style={styles.individualStat}>
        <Text style={styles.boldText}>{convertThousands(stargazersCount)}</Text>
        <Text style={styles.text}>Stars</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText}>{convertThousands(forksCount)}</Text>
        <Text style={styles.text}>Forks</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText}>{reviewCount}</Text>
        <Text style={styles.text}>Reviews</Text>
      </View>
      <View style={styles.individualStat}>
        <Text style={styles.boldText}>{ratingAverage}</Text>
        <Text style={styles.text}>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
