var {defineSupportCode} = require('cucumber');
const shell = require('shelljs');

class mySteps {

    navigateToLandingPage() {
        const command = browser.get('https://rozetka.com.ua');
        console.log('The command: ' + command);
        return shell.exec(command);
    }

    navigateToMenu(menuName) {
        menuName = $('a[class="menu-categories__link"]');
        const command = bowser.wait(EC.elementToBeClickable(menuName), 5000).click();
        console.log('The command: ' + command);
        return shell.exec(command);
    }
}