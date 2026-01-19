import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip, Button } from 'react-native-paper';

const sessions = [
  { id: 's-1', client: 'Maya Torres', time: 'Tue 7:00 AM', status: 'Confirmed' },
  { id: 's-2', client: 'Nick Zhang', time: 'Wed 6:00 PM', status: 'Pending' },
  { id: 's-3', client: 'Aisha Patel', time: 'Fri 5:30 PM', status: 'Confirmed' },
];

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Schedule
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Upcoming training sessions.
        </Text>

        {sessions.map((session) => (
          <Card key={session.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <View>
                  <Text variant="titleMedium">{session.client}</Text>
                  <Text variant="bodySmall" style={styles.muted}>
                    {session.time}
                  </Text>
                </View>
                <Chip>{session.status}</Chip>
              </View>
              <Button mode="outlined" style={styles.button}>
                Send reminder
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="calendar-plus">
          Book session
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  muted: {
    color: '#64748B',
    marginTop: 4,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});
