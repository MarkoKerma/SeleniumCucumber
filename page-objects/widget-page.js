const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    orderAmountInput: by.name("order_amount"),
    applyWidgetChangesButton: by.id("btn_create_widget"),
    widgetHTMLCode: by.id("widget_html"),
    pageHTML: by.tagName("html"),
};
module.exports = {
    // comment
    addFIATAmountForWidget: (amount) => {
        const orderAmountInput = EL_SELECTORS.orderAmountInput;
        const applyWidgetChangesButton = EL_SELECTORS.applyWidgetChangesButton;

        driver.findElement(orderAmountInput).clear();
        driver.findElement(orderAmountInput).sendKeys(amount);
        driver.findElement(applyWidgetChangesButton).click();
    },

    copyAndReplaceWidgetCode: () => {
        const widgetHTMLCode = EL_SELECTORS.widgetHTMLCode;
        driver.sleep(3000);
        // helpers.waitUntilAttributeContains(
        //     widgetHTMLCode,
        //     "value",
        //     "order_amount=22",
        //     5000
        // );
        helpers.replaceHTMLCode(widgetHTMLCode, "value");
    },
};
