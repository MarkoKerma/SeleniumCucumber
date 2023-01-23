module.exports = function () {
    this.Given(/^I login to Limitlex Forum Pay$/, () => {
        page.loginPage.goToLoginPage();
    });

    this.Given(/^open Widgets menu$/, () => {
        page.loginPage.loginToApp(
            shared.testData.username,
            shared.testData.password
        );
        page.twoFactorPage.enterCode(shared.testData.twoFactorCode);
        return page.dashboardPage.loginFinished();
    });

    this.When(/^I input Order Amount "([^"]*)"$/, (amount) => {
        page.dashboardPage.openWidgetPage();
        page.widgetPage.addFIATAmountForWidget(amount);
    });

    this.When(/^copy widget HTML$/, () => {
        page.widgetPage.copyWidgetCode();
    });

    this.When(/^open Cron Jobs page$/, () => {
        return page.cronJobsPage.openCronJobsPage();
    });

    this.When(/^start Cron Jobs$/, () => {
        page.cronJobsPage.execAllCrons();
        page.cronJobsPage.waitCronsToFinish();
    });

    this.When(/^use Widget Code in browser$/, () => {
        page.widgetPage.replaceWidgetCode();
    });

    this.When(/^confirm I am not a robot$/, () => {
        page.widgetCodePage.clickRecaptcha();
    });

    this.Then(/^widget will open with correct amount "([^"]*)"$/, (amount) => {
        return page.widgetCodePage.checkFIATAmountInWidget(amount);
    });
};
