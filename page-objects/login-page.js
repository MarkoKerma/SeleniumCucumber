const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    emailInput: by.id("email"),
    passwordInput: by.name("password"),
    recaptchaCheckBox: by.name("g-recaptcha-response"),
    rememberMeCheckBox: by.id("stay_loggedin"),
    loginButton: by.xpath("/html/body/div[9]/div[2]/form/div[4]/div/input"),
    codeInput: by.name("code"),
    verifyButton: by.xpath('//*[@id="app"]/form/div[2]/div/input'),
};
const twoFactorUrl = shared.environmentConfig.baseUrl + "/login_step_two?";

module.exports = {
    loginToApp: (userName, password) => {
        const emailInput = EL_SELECTORS.emailInput;
        const passwordInput = EL_SELECTORS.passwordInput;
        const recaptchaCheckBox = EL_SELECTORS.recaptchaCheckBox;
        const rememberMeCheckBox = EL_SELECTORS.rememberMeCheckBox;
        const loginButton = EL_SELECTORS.loginButton;
        driver.findElement(emailInput).sendKeys(userName);
        driver.findElement(passwordInput).sendKeys(password);
        driver.findElement(recaptchaCheckBox).click();
        driver.findElement(rememberMeCheckBox).click();
        driver.findElement(loginButton).click();
        helpers.waitURLToBe(twoFactorUrl);
        driver.getCurrentUrl().then((currentURL) => {
            expect(currentURL).equal(twoFactorUrl);
        });
    },

    enterCode: (code) => {
        const codeInput = EL_SELECTORS.codeInput;
        const verifyButton = EL_SELECTORS.verifyButton;
        driver.findElement(codeInput).sendKeys(code);
        driver.findElement(verifyButton).click();
    },
};
