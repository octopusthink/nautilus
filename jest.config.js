module.exports = {
  collectCoverageFrom: ['src/**/**.js'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  modulePaths: ['<rootDir>/', '<rootDir>/src/'],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '<rootDir>/utils/jest.setup.js',
  ],
  snapshotSerializers: ['jest-emotion'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Replace other files with their filename.
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/utils/jest.file-transform.js',
  },
};
