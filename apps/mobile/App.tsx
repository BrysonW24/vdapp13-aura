import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, Button, Card } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text variant="headlineMedium">Aura</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Personal training operations at scale
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Trainer Daily Brief</Text>
            <Text variant="bodyMedium" style={styles.body}>
              3 clients need attention, 2 check-ins overdue.
            </Text>
          </Card.Content>
        </Card>

        <Button mode="contained">Create Client</Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  subtitle: {
    color: '#6B7280',
  },
  card: {
    marginVertical: 12,
  },
  body: {
    color: '#6B7280',
  },
});
