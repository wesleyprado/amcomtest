const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      testFiles:"**/*.feature"
    },
  },
});



