const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    widgetPageButton: by.linkText("Widget"),
    myAccount: by.xpath("/html/body/div[6]/div/div[1]/form/a[1]"),
};
const widgetPageUrl = shared.environmentConfig.baseUrl + "/payWidget.create";
const dashboardUrl = shared.environmentConfig.baseUrl + "/";

module.exports = {
    /**
     * Selects Widget section from Header menu
     * waits for url to be url of widgets page
     */
    openWidgetPage: () => {
        const widgetPageButton = EL_SELECTORS.widgetPageButton;
        driver.findElement(widgetPageButton).click();
        helpers.waitURLToBe(widgetPageUrl);
        driver.getCurrentUrl().then(function (currentURL) {
            expect(currentURL).equal(widgetPageUrl);
        });
    },

    /**
     * Assert that user successfully logged into app
     * @returns assert
     */
    loginFinished: () => {
        helpers.waitURLToBe(dashboardUrl);
        return driver.getCurrentUrl().then(function (currentURL) {
            expect(currentURL).equal(dashboardUrl);
        });
    },
};
