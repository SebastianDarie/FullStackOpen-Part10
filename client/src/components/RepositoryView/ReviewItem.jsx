import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import { format } from 'date-fns';

const ReviewItem = ({ review, reviewsPage = false }) => {
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
            {reviewsPage
              ? review.repositoryId.replace('.', '/')
              : review.user.username}
          </Text>
          <Text style={{ color: theme.colors.textSecondary }}>
            {format(new Date(review.createdAt), 'dd-MM-yyyy')}
          </Text>
        </View>
        <Text style={{ flexShrink: 1 }}>{review.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 2,
  },
});

export default ReviewItem;
