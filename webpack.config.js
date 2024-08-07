const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify")
    }
  }
};
