/// <reference types="cypress" />

describe('Pagination path', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}?page=1`,
      },
      { fixture: 'oompasPageOne.json' }
    ).as('getOompasPage1')

    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}?page=2`,
      },
      { fixture: 'oompasPageTwo.json' }
    ).as('getOompasPage2')

    cy.visit(`${Cypress.env('appUrl')}`)
    cy.wait('@getOompasPage1')
  })

  it('Canot move to Previous page in first page', () => {
    cy.getBySel('oompa-grid').children().should('have.length', 25)
    cy.getBySel('previous-button').should('be.visible').and('be.disabled')
  })

  it('Move to Next page in first page', () => {
    cy.getBySel('next-button').should('be.visible').and('not.be.disabled').click()
    cy.wait('@getOompasPage2')
    cy.getBySel('previous-button').should('be.visible').and('not.be.disabled')
  })

  it('Move to Previous page in second page', () => {
    cy.getBySel('next-button').should('be.visible').and('not.be.disabled').click()
    cy.wait('@getOompasPage2')
    cy.getBySel('previous-button').s
    cy.getBySel('previous-button').should('be.visible').and('not.be.disabled').click()
    cy.wait('@getOompasPage1')
    cy.getBySel('previous-button').should('be.visible').and('be.disabled')
  })
})
