import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0F172A',
    secondary: '#06B6D4',
    tertiary: '#F97316',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#0F172A',
    onSurface: '#0F172A',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#94A3B8',
    secondary: '#5EEAD4',
    tertiary: '#FDBA74',
    background: '#0B1120',
    surface: '#0F172A',
    onPrimary: '#0B1120',
    onSecondary: '#0B1120',
    onBackground: '#E2E8F0',
    onSurface: '#E2E8F0',
  },
};

export const theme = lightTheme;
export { lightTheme, darkTheme };
