const { Before, Given, When, Then } = require('cucumber')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

Before(function () {
  return browser.get('index.html');
});

Given('things', function () {
  return 'pending';
});

When('I do things', function () {
  return 'pending';
});

Then('I should get things', function () {
  return 'pending';
});
