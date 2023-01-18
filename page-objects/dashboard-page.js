const helpers = require("../runtime/helpers");

module.exports = {
    elements: {
        widgetPageButton: by.linkText("Widget"),
        myAccount: by.xpath("/html/body/div[6]/div/div[1]/form/a[1]"),
    },

    openWidgetPage: () => {
        const widgetPageButton = page.dashboardPage.elements.widgetPageButton;
        driver.findElement(widgetPageButton).click();
        helpers.waitURLToBe(
            "https://payment-gateway-stage.dev.limitlex.io/payWidget.create"
        );
        driver.getCurrentUrl().then(function (currentURL) {
            expect(currentURL).equal(
                "https://payment-gateway-stage.dev.limitlex.io/payWidget.create"
            );
        });
    },

    loginFinished: () => {
        helpers.waitURLToBe("https://payment-gateway-stage.dev.limitlex.io/");
        return driver.getCurrentUrl().then(function (currentURL) {
            expect(currentURL).equal(
                "https://payment-gateway-stage.dev.limitlex.io/"
            );
        });
    },
};
