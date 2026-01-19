import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const atRisk = [
  { id: 'c-1', name: 'Maya Torres', reason: 'No check-in 10 days' },
  { id: 'c-2', name: 'Nick Zhang', reason: 'Plateaued 3 weeks' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Aura
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Today you have 3 clients needing attention.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Daily brief</Text>
            <View style={styles.chipRow}>
              <Chip style={styles.chip}>5 workouts due</Chip>
              <Chip style={styles.chip}>2 check-ins overdue</Chip>
              <Chip style={styles.chip}>1 session to confirm</Chip>
            </View>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Main', { screen: 'Clients' })}
            >
              Review clients
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">At-risk clients</Text>
            {atRisk.map((client) => (
              <View key={client.id} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{client.name}</Text>
                  <Text variant="bodySmall" style={styles.muted}>
                    {client.reason}
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('Snapshot', {
                      clientId: client.id,
                      name: client.name,
                    })
                  }
                >
                  Snapshot
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>
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
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  muted: {
    color: '#64748B',
    marginTop: 4,
  },
});
