exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },
    // spec location for the cucumber tests
    specs: ['features/findElement.feature'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'features/steps/step_defs.js'
        ],
        format: 'pretty'
    },

    ignoreUncaughtExceptions: true
};
