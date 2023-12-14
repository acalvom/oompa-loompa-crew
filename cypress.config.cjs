import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 3000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1500,
  viewportHeight: 942,
  numTestsKeptInMemory: 0,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    testIsolation: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
