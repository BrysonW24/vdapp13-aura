import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  ClientDetail: { id: string; name: string };
  Snapshot: { clientId: string; name: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Clients: undefined;
  Programs: undefined;
  Checkins: undefined;
  Messages: undefined;
  Schedule: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
