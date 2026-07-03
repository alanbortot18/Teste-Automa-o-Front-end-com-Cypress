const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 12000,
  pageLoadTimeout: 90000,

  e2e: {
    baseUrl: "https://www.mercadolivre.com.br",
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
