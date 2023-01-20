const { expect } = require("chai");
const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    recaptchaCheckoutBox: by.name("g-recaptcha-response"),
    orderAmountLabelText: by.id("orderAmountBox"),
};
module.exports = {
    clickRecaptcha: () => {
        const recaptchaCheckoutBox = EL_SELECTORS.recaptchaCheckoutBox;
        driver.switchTo().frame(0);
        helpers.clickWhenClickable(recaptchaCheckoutBox, 3000);
        driver.sleep(3000);
    },

    checkFIATAmountInWidget: (amount) => {
        const orderAmountLabelText = EL_SELECTORS.orderAmountLabelText;
        helpers.waitForElementToLoad(orderAmountLabelText);
        return driver
            .findElement(orderAmountLabelText)
            .getText()
            .then(function (elText) {
                expect(elText).to.contain(
                    `Total amount in FIAT: ${amount}.00 EUR`
                );
            });
    },
};
