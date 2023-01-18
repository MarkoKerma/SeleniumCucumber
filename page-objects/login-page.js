const helpers = require("../runtime/helpers");

module.exports = {
    url: "https://payment-gateway-stage.dev.limitlex.io",

    elements: {
        emailInput: by.id("email"),
        passwordInput: by.name("password"),
        recaptchaCheckBox: by.name("g-recaptcha-response"),
        rememberMeCheckBox: by.id("stay_loggedin"),
        loginButton: by.xpath("/html/body/div[9]/div[2]/form/div[4]/div/input"),
        codeInput: by.name("code"),
        verifyButton: by.xpath('//*[@id="app"]/form/div[2]/div/input'),
    },

    loginToApp: (userName, password) => {
        const emailInput = page.loginPage.elements.emailInput;
        const passwordInput = page.loginPage.elements.passwordInput;
        const recaptchaCheckBox = page.loginPage.elements.recaptchaCheckBox;
        const rememberMeCheckBox = page.loginPage.elements.rememberMeCheckBox;
        const loginButton = page.loginPage.elements.loginButton;
        driver.findElement(emailInput).sendKeys(userName);
        driver.findElement(passwordInput).sendKeys(password);
        driver.findElement(recaptchaCheckBox).click();
        driver.findElement(rememberMeCheckBox).click();
        driver.findElement(loginButton).click();
        helpers.waitURLToBe(
            "https://payment-gateway-stage.dev.limitlex.io/login_step_two?"
        );
        driver.getCurrentUrl().then( (currentURL) => {
            expect(currentURL).equal(
                "https://payment-gateway-stage.dev.limitlex.io/login_step_two?"
            );
        });
    },

    enterCode: () => {
        const codeInput = page.loginPage.elements.codeInput;
        const verifyButton = page.loginPage.elements.verifyButton;
        driver.findElement(codeInput).sendKeys("222222");
        driver.findElement(verifyButton).click();
    },
};
