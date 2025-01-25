const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://demoqa.com/',

    },
    pageLoadTimeout: 120000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/report',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
