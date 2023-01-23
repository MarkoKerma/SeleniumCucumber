const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    orderAmountInput: by.name("order_amount"),
    applyWidgetChangesButton: by.id("btn_create_widget"),
    widgetHTMLCode: by.id("widget_html"),
    pageHTML: by.tagName("html"),
};

const orderAmountInputText = "order_amount=";
module.exports = {
    // comment
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

    copyWidgetCode: () => {
        const widgetHTMLCode = EL_SELECTORS.widgetHTMLCode;
        this.widgetCode = helpers.getAttributeValueBySelector(
            widgetHTMLCode,
            "value"
        );
    },

    replaceWidgetCode: () => {
        helpers.replaceHTMLCode(this.widgetCode);
    },
};
