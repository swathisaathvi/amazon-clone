module.exports = {
    //...other Jest configuration options...
    collectCoverageFrom: [
      "!src/index.js",      // Exclude index.js
      "!src/reportWebVitals.js", // Exclude reportWebVitals.js
    ],
    coveragePathIgnorePatterns: [
      "/src/index.js",
    ],

    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/.jestignore"]
  };
  