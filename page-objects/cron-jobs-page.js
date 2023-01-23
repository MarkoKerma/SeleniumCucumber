const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    execAllButton: by.xpath("/html/body/div[2]/button"),
};
const cronsUrl = shared.environmentConfig.cronJobsUrl;

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
     * Waits for all CronJobs to be executed
     * WIP - need to replace implicit timeout
     */
    waitCronsToFinish: () => {
        driver.sleep(3000);
    },
};
