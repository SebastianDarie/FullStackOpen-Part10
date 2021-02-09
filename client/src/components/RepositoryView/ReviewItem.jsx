import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import theme from '../../theme';
import { format } from 'date-fns';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../../graphql/mutations';
import Button from '../Button';

const ReviewItem = ({ review, reviewsPage = false, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const pushToRepo = () => {
    history.push(`/${review.repositoryId}`);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'CANCEL', style: 'cancel' },
        {
          text: 'DELETE',
          onPress: async () => {
            if (refetch) {
              await deleteReview({ variables: { id: review.id } });
              await refetch({ includeReviews: true });
            }
          },
        },
      ]
    );
  };

  const actionButtons = (
    <View style={[styles.horizontalPosition, styles.marginContainer]}>
      <Button onPress={pushToRepo}>View repository</Button>
      <Button onPress={handleDelete}>Delete review</Button>
    </View>
  );

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.horizontalPosition}>
        <View style={styles.centerItems}>
          <View style={styles.reviewCircle}>
            <Text style={styles.rating}>{review.rating}</Text>
          </View>
        </View>
        <View style={{ flex: 16, flexShrink: 1 }}>
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
        {reviewsPage && actionButtons}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.default,
    padding: 12,
  },

  horizontalPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  marginContainer: {
    marginTop: 12,
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
