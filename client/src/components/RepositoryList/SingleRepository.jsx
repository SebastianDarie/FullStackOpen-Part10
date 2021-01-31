import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { convertThousands } from '../../utils/functions';
import theme from '../../theme';

const RepositoryInfo = ({ repository, single = false }) => {
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

      <RepoStats
        id={repository.id}
        forksCount={repository.forksCount}
        stargazersCount={repository.stargazersCount}
        ratingAverage={repository.ratingAverage}
        reviewCount={repository.reviewCount}
      />

      {single && (
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

const RepoStats = ({
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

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.centerItems}>
        <View style={styles.reviewCircle}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
      </View>
      <View style={{ flex: 20, flexShrink: 1 }}>
        <View>
          <Text style={{ fontWeight: theme.fontWeights.bold }}>
            {review.user.username}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>
            {review.createdAt}
          </Text>
        </View>
        <Text style={{ flexShrink: 1 }}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = ({ repo, single = false }) => {
  const reviews = repo.reviews;

  return single ? (
    <>
      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        renderItem={({ item: review }) => <ReviewItem review={review} />}
        ListHeaderComponent={
          <RepositoryInfo repository={repo} single={single} />
        }
      />
    </>
  ) : (
    <RepositoryInfo repository={repo} single={single} />
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

  reviewContainer: {
    backgroundColor: theme.colors.default,
    flexDirection: 'row',
    padding: 12,
  },

  centerItems: {
    flex: 4,
    alignItems: 'center',
  },

  reviewCircle: {
    borderRadius: 24,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
  },

  rating: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

export default SingleRepository;
