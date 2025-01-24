import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-chart-kit', () => ({
  LineChart: 'LineChart',
  BarChart: 'BarChart',
  PieChart: 'PieChart',
  ContributionGraph: 'ContributionGraph',
  RadarChart: 'RadarChart',
  ProgressChart: 'ProgressChart',
  ScatterChart: 'ScatterChart',
}));

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

jest.mock('@react-navigation/native', () => ({
  useTheme: () => ({
    colors: {
      text: '#000000',
      background: '#FFFFFF',
      card: '#F5F5F5',
      primary: '#0066CC',
    },
  }),
}));
