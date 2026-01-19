import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';

const programs = [
  { id: 'p-1', title: 'Hypertrophy Block', focus: 'Strength', weeks: 4 },
  { id: 'p-2', title: 'Conditioning Sprint', focus: 'Endurance', weeks: 6 },
  { id: 'p-3', title: 'Reset & Mobility', focus: 'Recovery', weeks: 3 },
];

export default function ProgramsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Programs
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Templates ready to assign to clients.
        </Text>

        {programs.map((program) => (
          <Card key={program.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{program.title}</Text>
              <View style={styles.rowBetween}>
                <Text variant="bodySmall" style={styles.muted}>
                  Focus: {program.focus}
                </Text>
                <Chip>{program.weeks} weeks</Chip>
              </View>
              <Button mode="outlined" style={styles.button}>
                Assign program
              </Button>
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="plus">
          Create template
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
    marginTop: 8,
  },
  muted: {
    color: '#64748B',
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
});
