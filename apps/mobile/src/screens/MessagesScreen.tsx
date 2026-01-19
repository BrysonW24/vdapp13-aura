import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const threads = [
  { id: 't-1', name: 'Maya Torres', preview: 'Thanks for the plan update!' },
  { id: 't-2', name: 'Nick Zhang', preview: 'Can we adjust session time?' },
  { id: 't-3', name: 'Aisha Patel', preview: 'Logged my workout for today.' },
];

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Messages
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Stay on top of client conversations.
      </Text>

      {threads.map((thread) => (
        <Card key={thread.id} style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">{thread.name}</Text>
            <Text variant="bodySmall" style={styles.preview}>
              {thread.preview}
            </Text>
            <Button mode="text">Open chat</Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    color: '#64748B',
  },
  card: {
    marginBottom: 16,
  },
  preview: {
    color: '#64748B',
    marginTop: 6,
  },
});
