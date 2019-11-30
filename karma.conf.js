const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // Match all files ending in "_test" directly in the "test" folder
      { pattern: 'test/*_test.js', watched: false }
    ],

    preprocessors: {
      'test/*_test.js': ['webpack']
    },

    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      mode: webpackConfig.mode,
      devtool: 'inline-source-map'
    },

    browsers: ['ChromeHeadless']
    // browsers: ['Chrome']
  });
};