import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import theme from '../../theme';
import RepositoryStats from './RepositoryStats';

const RepositoryInfo = ({ repository, github = false }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={{ uri: repository.ownerAvatarUrl }}
          />
        </View>

        <View style={styles.repoInfo}>
          <Text style={styles.name}>{repository.fullName}</Text>
          <Text style={styles.text}>{repository.description}</Text>
          <Text style={styles.language} testID={`${repository.id}/lang`}>
            {repository.language}
          </Text>
        </View>
      </View>

      <RepositoryStats
        id={repository.id}
        forksCount={repository.forksCount}
        stargazersCount={repository.stargazersCount}
        ratingAverage={repository.ratingAverage}
        reviewCount={repository.reviewCount}
      />

      {github && (
        <TouchableWithoutFeedback
          onPress={() => WebBrowser.openBrowserAsync(repoData.url)}
        >
          <View style={[styles.infoContainer, styles.buttonContainer]}>
            <Text style={styles.buttonText}>Open in GitHub</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

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

  buttonContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    justifyContent: 'center',
    margin: 8,
    padding: 12,
  },

  buttonText: {
    color: theme.colors.default,
    fontWeight: theme.fontWeights.bold,
  },
});

export default RepositoryInfo;
