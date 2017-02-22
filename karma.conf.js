// Karma configuration
// Generated on Fri Feb 10 2017 01:09:11 GMT+0200 (Финляндия (зима))
var webpack = require("webpack"),
  path = require("path");

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: './assets/app/spec.ts', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './assets/app/spec.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      resolve: {
        extensions: ['.js', '.ts', '.scss']
      },

      module: {
        loaders: [
          {
            test: /\.ts$/,
            loaders: [
              'awesome-typescript-loader',
              'angular2-template-loader',
              'angular2-router-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.scss$/,
            loaders: ['raw-loader', 'sass-loader']
          },
          {
            test: require.resolve('tinymce/tinymce'),
            loaders: [
              'imports?this=>window',
              'exports?window.tinymce'
            ]
          },
          {
            test: /tinymce\/(themes|plugins)\//,
            loaders: [
              'imports?this=>window'
            ]
          }
        ]
      },

      plugins: [
        new webpack.ContextReplacementPlugin(
          // The (\\|\/) piece accounts for path separators in *nix and Windows
          /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
          './src' // location of your src
        )
      ]
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
