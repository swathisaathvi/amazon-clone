module.exports = {
    // ...other Jest configuration options...
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: "jsdom"
  };
  