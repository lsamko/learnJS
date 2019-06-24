exports.config = {
    SELENIUM_PROMISE_MANAGER: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // spec location for the cucumber tests
    specs: ['features/steps/findLocator.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    framework: 'jasmine',
};
