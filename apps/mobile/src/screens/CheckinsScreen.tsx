import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';

const checkins = [
  { id: 'ch-1', name: 'Maya Torres', mood: '7/10', sleep: '6.5h' },
  { id: 'ch-2', name: 'Nick Zhang', mood: '5/10', sleep: '5h' },
  { id: 'ch-3', name: 'Aisha Patel', mood: '8/10', sleep: '7h' },
];

export default function CheckinsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Check-ins
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Weekly insights from clients.
        </Text>

        {checkins.map((checkin) => (
          <Card key={checkin.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{checkin.name}</Text>
              <View style={styles.rowBetween}>
                <Chip style={styles.chip}>Mood {checkin.mood}</Chip>
                <Chip style={styles.chip}>Sleep {checkin.sleep}</Chip>
              </View>
              <Button mode="text">Review check-in</Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="clipboard-text-outline">
          Send reminder
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
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
  rowBetween: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
});
