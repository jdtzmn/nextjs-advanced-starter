/// <reference types="Cypress" />

context('Welcome Page', () => {
  it('increments the count on button click', () => {
    cy.visit('/')

    // Define aliases
    cy.get('#__next').get('div').as('wrapper')
    cy.get('@wrapper').get('button').as('incrementButton')
    cy.get('@wrapper').get('p').as('count')

    // Check the count
    cy.get('@count')
      .should('have.text', '0')

    // Increment the count
    cy.get('@incrementButton')
      .click()

    // Check the count again
    cy.get('@count')
      .should('have.text', '1')
  })
})
