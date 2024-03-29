module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/**.js'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['lcov', 'html', 'text-summary'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  setupFilesAfterEnv: ['<rootDir>/utils/jest.setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/styleguide/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Replace other files with their filename.
    '^(?!.*\\.(js|jsx|json)$)': '<rootDir>/utils/jest.file-transform.js',
  },
};
