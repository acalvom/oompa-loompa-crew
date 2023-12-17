/// <reference types="cypress" />

describe('Filter by search workflow', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: `${Cypress.env('apiUrl')}?page=1`,
      },
      { fixture: 'oompasPageOne.json' }
    ).as('getOompasPage1')

    cy.visit('http://localhost:3000')
    cy.wait('@getOompasPage1')
  })

  afterEach(() => cy.getBySel('search-input').clear())

  it('All Oopmas available', () => {
    cy.getBySel('search-input').should('be.visible').and('be.empty')
    cy.getBySel('oompa-grid').children().should('have.length', 25)
  })

  it('Only Oompas with profession Gemcutter are listed', () => {
    cy.getBySel('search-input').type('Gemcutter')
    cy.getBySel('oompa-grid')
      .children()
      .each(() => cy.getBySel('oompa-profession').should('contain.text', 'Gemcutter'))
    cy.getBySel('oompa-grid').children().should('have.length', 3)
  })

  it('Search input escapes characters', () => {
    cy.getBySel('search-input').type('Gemcutter')
    cy.getBySel('oompa-grid').children().should('have.length', 3)
    cy.getBySel('search-input').clear()
    cy.getBySel('search-input').type('gemcutter')
    cy.getBySel('oompa-grid').children().should('have.length', 3)
    cy.getBySel('search-input').clear()
    cy.getBySel('search-input').type('GEMCUTTER')
    cy.getBySel('oompa-grid').children().should('have.length', 3)
  })
})
