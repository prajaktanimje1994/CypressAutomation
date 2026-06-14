const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      testIsolation: false;
    },
  },
  specpattern: "cypress/e2e/AutomationTestPractice/*.cy.js"
});
