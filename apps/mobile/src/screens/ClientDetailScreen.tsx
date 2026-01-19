import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip, List } from 'react-native-paper';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type RouteProps = RouteProp<RootStackParamList, 'ClientDetail'>;

export default function ClientDetailScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();
  const { id, name } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {name}
        </Text>
        <View style={styles.metaRow}>
          <Chip style={styles.chip}>Client ID {id}</Chip>
          <Chip style={styles.chip}>Goal: Strength</Chip>
          <Chip style={styles.chip}>Equipment: Home gym</Chip>
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Current program</Text>
            <Text variant="bodySmall" style={styles.muted}>
              4-week hypertrophy block • Week 2
            </Text>
            <Button mode="outlined" style={styles.button}>
              Adjust program
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Latest check-in</Text>
            <List.Item title="Mood" description="7/10" />
            <List.Item title="Sleep" description="6.5 hours" />
            <List.Item title="Adherence" description="82%" />
            <Button
              mode="text"
              onPress={() =>
                navigation.navigate('Snapshot', {
                  clientId: id,
                  name,
                })
              }
            >
              View snapshot
            </Button>
          </Card.Content>
        </Card>

        <Button mode="contained" icon="message-text-outline">
          Message client
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
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
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
