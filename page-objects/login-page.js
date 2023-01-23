const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    emailInput: by.id("email"),
    passwordInput: by.name("password"),
    recaptchaCheckBox: by.name("g-recaptcha-response"),
    rememberMeCheckBox: by.id("stay_loggedin"),
    loginButton: by.xpath("/html/body/div[9]/div[2]/form/div[4]/div/input"),
};
const twoFactorUrl = shared.environmentConfig.baseUrl + "/login_step_two?";

module.exports = {
    /**
     * Opens Login Page on ForumPay App
     */
    goToLoginPage: () => {
        helpers.loadPage(shared.environmentConfig.baseUrl + "/login");
    },

    /**
     *  Logins user to the ForumPay App
     * @param {String} userName - email of existing user
     * @param {String} password - valid password of that user
     */
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
};
