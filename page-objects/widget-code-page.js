const { expect } = require("chai");
const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    recaptchaCheckoutBox: by.name("g-recaptcha-response"),
    orderAmountLabelText: by.id("orderAmountBox"),
    recaptchaSection: by.id("pageRecaptcha"),
};
const styleValueWidgetPage =
    "max-width: 500px; margin-left: auto; margin-right: auto; margin-top: 15px; display: none;";
module.exports = {
    /**
     * Clicks "I am not robot" checkbox on widget code
     */
    clickRecaptcha: () => {
        const recaptchaCheckoutBox = EL_SELECTORS.recaptchaCheckoutBox;
        driver.switchTo().frame(0);
        helpers.clickWhenClickable(recaptchaCheckoutBox, 3000);
    },

    /**
     * Check total amount value of FIAT in widget code
     * @param {String} amountValue - amount added in widget code
     */
    checkFIATAmountInWidget: (amount) => {
        const orderAmountLabelText = EL_SELECTORS.orderAmountLabelText;
        const recaptchaSection = EL_SELECTORS.recaptchaSection;
        helpers.waitUntilAttributeEquals(
            recaptchaSection,
            "style",
            styleValueWidgetPage,
            5000
        );
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
