/// <reference types="cypress" />

describe('Not Found path', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}?page=1`,
      },
      { fixture: 'oompasPageOne.json' }
    ).as('getOompasPage1')

    cy.visit(`${Cypress.env('appUrl')}`)
  })

  it('Not found path', () => {
    cy.visit(`${Cypress.env('appUrl')}/not-found`)
    cy.getBySel('willy-wonka-img').should('be.visible')
    cy.getBySel('back-to-home').should('be.visible').and('contain', 'Back with the Oompas').click()
    cy.url().should('eq', `${Cypress.env('appUrl')}/`)
    cy.wait('@getOompasPage1')
  })
})
