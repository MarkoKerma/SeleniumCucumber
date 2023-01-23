const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    orderAmountInput: by.name("order_amount"),
    applyWidgetChangesButton: by.id("btn_create_widget"),
    widgetHTMLCode: by.id("widget_html"),
    pageHTML: by.tagName("html"),
};
const orderAmountInputText = "order_amount=";

module.exports = {
    /**
     * Adds value to order amount filed in widget code creation form
     * @param {String} amount - value to add in input element
     */
    addFIATAmountForWidget: (amount) => {
        const orderAmountInput = EL_SELECTORS.orderAmountInput;
        const applyWidgetChangesButton = EL_SELECTORS.applyWidgetChangesButton;
        const widgetHTMLCode = EL_SELECTORS.widgetHTMLCode;

        driver.findElement(orderAmountInput).clear();
        driver.findElement(orderAmountInput).sendKeys(amount);
        driver.findElement(applyWidgetChangesButton).click();
        helpers.waitUntilAttributeContains(
            widgetHTMLCode,
            "value",
            orderAmountInputText + amount
        );
    },

    /**
     * Copies widget code and save it as widgetCode for later use
     */
    copyWidgetCode: () => {
        const widgetHTMLCode = EL_SELECTORS.widgetHTMLCode;
        this.widgetCode = helpers.getAttributeValueBySelector(
            widgetHTMLCode,
            "value"
        );
    },

    /**
     * Replaces html code on page with widget code saved as widgetHTMLCode
     */
    replaceWidgetCode: () => {
        helpers.replaceHTMLCode(this.widgetCode);
    },
};
