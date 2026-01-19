import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, Switch, Text, Divider, Button } from 'react-native-paper';

export default function SettingsScreen() {
  const [dailyBrief, setDailyBrief] = useState(true);
  const [checkinReminders, setCheckinReminders] = useState(true);
  const [workoutReminders, setWorkoutReminders] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Settings
      </Text>

      <List.Item
        title="Daily brief"
        description="Morning summary of client priorities"
        left={(props) => <List.Icon {...props} icon="calendar" />}
        right={() => (
          <Switch value={dailyBrief} onValueChange={setDailyBrief} />
        )}
      />
      <Divider />
      <List.Item
        title="Check-in reminders"
        description="Notify clients to complete weekly check-ins"
        left={(props) => <List.Icon {...props} icon="clipboard-text" />}
        right={() => (
          <Switch value={checkinReminders} onValueChange={setCheckinReminders} />
        )}
      />
      <Divider />
      <List.Item
        title="Workout nudges"
        description="Remind clients about upcoming workouts"
        left={(props) => <List.Icon {...props} icon="dumbbell" />}
        right={() => (
          <Switch value={workoutReminders} onValueChange={setWorkoutReminders} />
        )}
      />
      <Divider />

      <Button mode="contained" style={styles.button}>
        Manage subscription
      </Button>
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
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
});
