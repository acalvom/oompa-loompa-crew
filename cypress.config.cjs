import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 10000,
  defaultCommandTimeout: 30000,
  viewportWidth: 2000,
  viewportHeight: 942,
  numTestsKeptInMemory: 0,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    testIsolation: true,
    // baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
