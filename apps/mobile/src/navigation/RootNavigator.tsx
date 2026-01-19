import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import ClientDetailScreen from '../screens/ClientDetailScreen';
import SnapshotScreen from '../screens/SnapshotScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen
          name="ClientDetail"
          component={ClientDetailScreen}
          options={{ headerShown: true, title: 'Client Profile' }}
        />
        <Stack.Screen
          name="Snapshot"
          component={SnapshotScreen}
          options={{ headerShown: true, title: 'Client Snapshot' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
