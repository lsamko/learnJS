// the step definitions for the cucumber scenarios
const protractor = require("protractor");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
const EC = protractor.ExpectedConditions;
const browser = require('browser');

module.exports = function () {
    this.Then(/^I close widget$/, {timeout: 30 * 1000}, async function () {
        let button = $("span[class='exponea-close-cross']");
        await browser.wait(EC.elementToBeClickable(button), 5000);
        await button.click();
    });
    this.Then(/^I navigate to landing page$/, {timeout: 60 * 1000}, async function () {
        const baseUrl = 'https://rozetka.com.ua';
        let currentUrl = $("a[href='https://rozetka.com.ua']");
        await browser.get(baseUrl);
        await browser.wait(EC.visibilityOf(baseUrl), 5000)
            .cath(() => new Error("Page is not available"));
        return expect(baseUrl).to.equal(currentUrl);
    });
}