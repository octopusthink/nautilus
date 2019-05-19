module.exports = {
  collectCoverageFrom: [
    'src/**/**.js',
    // This in the entry-point for `npm start` and doesn't need code coverage.
    '!src/index.js',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['html', 'text-summary'],
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //     statements: 70,
  //   },
  // },
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  modulePaths: ['<rootDir>/', '<rootDir>/src/'],
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
    '<rootDir>/utils/jest.setup.js',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Replace other files with their filename.
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/utils/jest.file-transform.js',
  },
  // transformIgnorePatterns: ['node_modules/(?!(payment-icons)/)'],
};
