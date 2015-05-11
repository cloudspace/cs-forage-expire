// Karma configuration
// Generated on Mon May 04 2015 13:18:29 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/moment/moment.min.js',
      'bower_components/localforage/dist/localforage.min.js',
      'lib/cs-forage-expire.js',
      'lib/**/*.js',
      'test/**/*.js'
    ],
    plugins: [
      "karma-phantomjs-launcher",
      'karma-jasmine'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};