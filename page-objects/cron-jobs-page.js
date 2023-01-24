const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    execAllButton: by.xpath("/html/body/div[2]/button"),
    cronText: by.xpath("/html/body/pre"),
    btcIframeId: "cron-3",
    setFeesIframeId: "cron-56",
};
const cronsUrl = shared.environmentConfig.cronJobsUrl;
const btcCronExpectedText = "Running test run !!one time check only!!";
const setFeesCronExpectedText = "Starting fee recalculation for MERCHANTS";
module.exports = {
    /**
     * Opens CronJobs page on ForumPay
     */
    openCronJobsPage: () => {
        return helpers.loadPage(cronsUrl);
    },

    /**
     *  Executes all CronJobs on CronJobs Page
     */
    execAllCrons: () => {
        const execAllButton = EL_SELECTORS.execAllButton;
        helpers.waitURLToBe(cronsUrl);
        driver.findElement(execAllButton).click();
    },

    /**
     * Waits for all CronJobs to be executed by checking two crons
     * first with id 3 - checkUnconfirmedTransactions BTC and
     * second with id 56 - setFeesByMonthlyVolume
     */
    waitCronsToFinish: () => {
        driver.switchTo().frame(EL_SELECTORS.btcIframeId);
        driver
            .findElement(EL_SELECTORS.cronText)
            .getText()
            .then((elText) => {
                expect(elText).to.contain(btcCronExpectedText);
            });
        driver.switchTo().defaultContent();
        driver.switchTo().frame(EL_SELECTORS.setFeesIframeId);
        driver
            .findElement(EL_SELECTORS.cronText)
            .getText()
            .then((elText) => {
                expect(elText).to.contain(setFeesCronExpectedText);
            });
        driver.switchTo().defaultContent();
    },
};
