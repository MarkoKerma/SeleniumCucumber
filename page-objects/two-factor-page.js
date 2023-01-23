const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    codeInput: by.name("code"),
    verifyButton: by.xpath('//*[@id="app"]/form/div[2]/div/input'),
};

module.exports = {
    /**
     * Types two factor code in Two Factor input field
     * @param {String} code - hardcoded value of two factor code used in testing environment
     */
    enterCode: (code) => {
        const codeInput = EL_SELECTORS.codeInput;
        const verifyButton = EL_SELECTORS.verifyButton;
        driver.findElement(codeInput).sendKeys(code);
        driver.findElement(verifyButton).click();
    },
};
