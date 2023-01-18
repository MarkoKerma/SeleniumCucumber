const helpers = require("../runtime/helpers");

module.exports = {
    elements: {
        orderAmountInput: by.name("order_amount"),
        applyWidgetChangesButton: by.id("btn_create_widget"),
        widgetHTMLCode: by.id("widget_html"),
        pageHTML: by.tagName("html"),
    },

    // comment
    addFIATAmountForWidget: (amount) => {
        const orderAmountInput = page.widgetPage.elements.orderAmountInput;
        const applyWidgetChangesButton =
            page.widgetPage.elements.applyWidgetChangesButton;

        driver.findElement(orderAmountInput).clear();
        driver.findElement(orderAmountInput).sendKeys(amount);
        driver.findElement(applyWidgetChangesButton).click();
    },

    copyAndReplaceWidgetCode: () => {
        const widgetHTMLCode = page.widgetPage.elements.widgetHTMLCode;
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
