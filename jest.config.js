module.exports = {
  verbose: false,
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|react-navigation-tabs' +
      '|react-native-screens' +
      '|react-native-reanimated' +
      '|@react-native' +
      '|@react-navigation' +
      ')/)',
  ],
};
