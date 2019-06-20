// the step definitions for the cucumber scenarios
const protractor = require('protractor');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
const EC = protractor.ExpectedConditions;
const mySteps = require('./mySteps');

module.exports = function () {
    this.Given(/^I navigate to landing page$/, {timeout: 60 * 1000}, async function () {
        mySteps.navigateToLandingPage();
    });

    this.Then(/^I close widget$/, {timeout: 30 * 1000}, async function () {
        await browser.wait(EC.elementToBeClickable($("span[class='exponea-close-cross']")), 5000);
        await $("span[class='exponea-close-cross']").click();
    });

    this.Then (/^I navigate to "([^"]*)" menu $/, {timeout: 30 * 1000}, async function () {
        mySteps.navigateToMenu("Computer")
    })

}