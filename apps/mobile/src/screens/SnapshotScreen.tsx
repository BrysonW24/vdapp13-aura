import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Chip, Button } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type RouteProps = RouteProp<RootStackParamList, 'Snapshot'>;

export default function SnapshotScreen() {
  const route = useRoute<RouteProps>();
  const { name } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {name}
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        LLM-generated coaching snapshot.
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Summary</Text>
          <Text variant="bodyMedium" style={styles.body}>
            {name} completed 4 of 5 workouts this week. Strength trend is positive.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Risk flags</Text>
          <Chip style={styles.chip}>Sleep below target</Chip>
          <Chip style={styles.chip}>Missed mobility</Chip>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Suggested actions</Text>
          <Text variant="bodyMedium" style={styles.body}>
            Suggest a deload day and adjust bedtime routine.
          </Text>
          <Button mode="outlined" style={styles.button}>
            Apply suggestions
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Draft message</Text>
          <Text variant="bodyMedium" style={styles.body}>
            Hey {name}, awesome consistency this week. Let's add a light recovery
            session and aim for 7 hours of sleep to keep momentum.
          </Text>
          <Button mode="contained" style={styles.button}>
            Send to client
          </Button>
        </Card.Content>
      </Card>
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
  body: {
    color: '#64748B',
    marginTop: 8,
  },
  chip: {
    marginTop: 8,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});
