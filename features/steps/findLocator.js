describe("Test page", function () {
    it("Click on Computer menu", async () => {

        browser.ignoreSynchronization = true;
        await browser.get('https://github.com');
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf($('a[href="/login"]')), 5000);
        await $('a[href="/login"]').click();
    });
});