const helpers = require("../runtime/helpers");
const EL_SELECTORS = {
    execAllButton: by.xpath("/html/body/div[2]/button"),
};
const cronsUrl = shared.environmentConfig.cronJobsUrl;

module.exports = {
    openCronJobsPage: () => {
        return helpers.loadPage(cronsUrl);
    },

    execAllCrons: () => {
        helpers.waitURLToBe(cronsUrl);
        driver.sleep(3000);
    },

    waitCronsToFinish: () => {
        driver.sleep(3000);
    },
};
