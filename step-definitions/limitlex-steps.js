module.exports = function () {
    this.Given(/^I login to Limitlex Forum Pay$/, () => {
        return helpers.loadPage(page.loginPage.url + "/login");
    });

    this.Given(/^open Widgets menu$/, () => {
        page.loginPage.loginToApp(
            shared.testData.username,
            shared.testData.password
        );
        page.loginPage.enterCode();
        return page.dashboardPage.loginFinished();
    });

    this.When(/^I input Order Amount "([^"]*)"$/, (amount) => {
        page.dashboardPage.openWidgetPage();
        page.widgetPage.addFIATAmountForWidget(amount);
    });

    this.When(/^use Widget Code in browser$/, () => {
        page.widgetPage.copyAndReplaceWidgetCode();
    });

    this.When(/^confirm I am not a robot$/, () => {
        page.widgetCodePage.clickRecaptcha();
    });

    this.Then(
        /^widget will open with correct amount "([^"]*)"$/,
        (amount) => {
            return page.widgetCodePage.checkFIATAmountInWidget(amount);
        }
    );
};
