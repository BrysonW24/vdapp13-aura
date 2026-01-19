import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
