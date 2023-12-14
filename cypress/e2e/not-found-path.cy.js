/// <reference types="cypress" />

describe('Not Found path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Not found path', () => {
    cy.visit('http://localhost:3000/not-found')
    cy.getBySel('willy-wonka-img').should('be.visible')
    cy.getBySel('back-to-home').should('be.visible').and('contain', 'Back with the Oompas').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
