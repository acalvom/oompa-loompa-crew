Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('clickOutside', () => {
  return cy.get('body').click(0, 0)
})
