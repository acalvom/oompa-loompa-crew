/// <reference types="cypress" />

describe('Oompa path', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}?page=1`,
      },
      { fixture: 'oompasPageOne.json' }
    ).as('getOompasPage1')
    cy.visit(`${Cypress.env('appUrl')}`)
    cy.wait('@getOompasPage1')
  })

  it('Navigate to an Oompa details', () => {
    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}/1`,
      },
      { fixture: 'oompaDetails.json' }
    ).as('getOompasDetails')

    cy.getBySel('oompa-grid').children().first().click()
    cy.url().should('eq', `${Cypress.env('appUrl')}/oompa/1`)
    cy.wait('@getOompasDetails')
    cy.getBySel('oompa-img').should('be.visible')
    cy.getBySel('oompa-info').contains('Marcy Karadzas')
    cy.getBySel('back-to-home').should('be.visible').and('contain', 'Back with the Oompas').click()
  })
})
