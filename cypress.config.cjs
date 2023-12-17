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
  env: {
    apiUrl: 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas'
  },
  e2e: {
    testIsolation: true,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
