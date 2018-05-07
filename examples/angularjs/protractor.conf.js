const path = require('path')

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'file://' + __dirname + '/',

  capabilities: {
      browserName:'chrome'
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    './features/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['./features/*.js'],  // require step definition files before executing features
    // tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // strict: true,                  // <boolean> fail if there are any undefined or pending steps
    // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // 'dry-run': false,              // <boolean> invoke formatters without executing steps
    // compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files

    // By default, Protractor use data:text/html,<html></html> as resetUrl, but
    // location.replace from the data: to the file: protocol is not allowed
    // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
    // with the file: protocol (this particular one will open system's root folder)
    browser.resetUrl = 'file://';
  }
};
