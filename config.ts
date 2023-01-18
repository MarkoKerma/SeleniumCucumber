const config = {
    baseUrl:
        process.env.BASE_URL ||
        "https://payment-gateway-stage.dev.limitlex.io/",
    recordVideos: process.env.PWVIDEO || false,
    browser: process.env.BROWSER || "chromium", // chromium or firefox or webkit
    defaultTimeout: 60 * 1000, // milliseconds
    runHeadless: true,
    runSlow: 0, // milliseconds
};

export default config;
