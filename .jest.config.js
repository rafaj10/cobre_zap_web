module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    "global": {
      lines: 0,
    }
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!/node_modules/",
    "!src/index.js",
    "!src/App.js",
    "!src/serviceWorker.js",
    "!src/core/*",
    "!src/**/*.service.{js,jsx}",
    "!src/**/*.reducer.{js,jsx}",
    "!src/**/*.constants.{js,jsx}",
  ],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],
};