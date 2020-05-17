module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  rootDir: '__tests__',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
};
