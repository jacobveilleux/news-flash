import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const StoryDetailsModal = () => {
  return (
    <View style={styles.container}>
      <Text>Story Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
