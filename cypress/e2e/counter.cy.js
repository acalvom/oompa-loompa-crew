/// <reference types="cypress" />

describe('Counter test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Test counter', () => {
    cy.getBySel('count').should('be.visible').and('contain', '0');
    cy.getBySel('increment').should('be.visible').and('contain', '+ Increment').click();
    cy.getBySel('count').should('be.visible').and('contain', '1');
    cy.getBySel('decrement').should('be.visible').and('contain', '- Decrement').click();
    cy.getBySel('count').should('be.visible').and('contain', '0');
  });
});
