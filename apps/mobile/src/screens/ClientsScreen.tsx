import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const clients = [
  { id: 'c-1', name: 'Maya Torres', goal: 'Strength', status: 'On track' },
  { id: 'c-2', name: 'Nick Zhang', goal: 'Fat loss', status: 'Needs check-in' },
  { id: 'c-3', name: 'Aisha Patel', goal: 'Endurance', status: 'New plan' },
];

export default function ClientsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Clients
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Manage profiles, plans, and check-ins.
        </Text>

        {clients.map((client) => (
          <Card key={client.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <View>
                  <Text variant="titleMedium">{client.name}</Text>
                  <Text variant="bodySmall" style={styles.muted}>
                    Goal: {client.goal}
                  </Text>
                </View>
                <Chip>{client.status}</Chip>
              </View>
              <View style={styles.actionRow}>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('ClientDetail', {
                      id: client.id,
                      name: client.name,
                    })
                  }
                >
                  View profile
                </Button>
                <Button
                  mode="outlined"
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
            </Card.Content>
          </Card>
        ))}

        <Button mode="contained" icon="plus">
          Add client
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
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  muted: {
    color: '#64748B',
    marginTop: 4,
  },
});
