const { expect } = require("chai");
// import helpers from 'runtime';
const helpers = require("../runtime/helpers");

module.exports = {
    elements: {
        recaptchaCheckoutBox: by.name("g-recaptcha-response"),
        orderAmountLabelText: by.id("orderAmountBox"),
    },

    clickRecaptcha: () => {
        const recaptchaCheckoutBox =
            page.widgetCodePage.elements.recaptchaCheckoutBox;
        driver.switchTo().frame(0);
        helpers.clickWhenClickable(recaptchaCheckoutBox, 3000);
        driver.sleep(3000);
    },

    checkFIATAmountInWidget: (amount) => {
        const orderAmountLabelText =
            page.widgetCodePage.elements.orderAmountLabelText;
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
