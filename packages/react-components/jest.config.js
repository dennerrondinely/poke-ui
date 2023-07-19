module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.ts(x)',
    '!**/*.d.ts',
    '!**/*stories.tsx',
    '!**/*styles.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};