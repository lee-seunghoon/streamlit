/// <reference types="cypress" />

describe('handles empty charts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('gracefully handles no data', () => {
    // vega lite
    cy.get('.stVegaLiteChart')
      .matchImageSnapshot('empty-vega-lite-chart')

    // pyplot
    cy.get('.stImage > img')
      .should('have.attr', 'src')

    // BUG https://github.com/cypress-io/cypress/issues/4322
    // cy.get('.stDeckGlChart canvas')
    //  .should('exist')
  })

  it('handles no data with exception', () => {
    cy.get('.stException .message')
      .eq(0)
      .should('have.text', 'ValueError: Vega-Lite charts require a non-empty spec dict.')

    cy.get('.stException .message')
      .eq(1)
      .should('have.text', 'ValueError: Vega-Lite charts require a non-empty spec dict.')

    cy.get('.stException .message')
      .eq(2)
      .should('have.text', 'ValueError: Vega-Lite charts require a non-empty spec dict.')

    cy.get('.stException .message')
      .eq(3)
      .should('have.text', 'ValueError: Vega-Lite charts require a non-empty spec dict.')

    cy.get('.stException .message')
      .eq(4)
      .should('have.text', 'TypeError: altair_chart() missing 1 required positional argument: \'altair_chart\'')

    cy.get('.stException .message')
      .eq(5)
      .should('have.text', 'TypeError: line_chart() missing 1 required positional argument: \'data\'')

    cy.get('.stException .message')
      .eq(6)
      .should('have.text', 'TypeError: area_chart() missing 1 required positional argument: \'data\'')

    cy.get('.stException .message')
      .eq(7)
      .should('have.text', 'TypeError: bar_chart() missing 1 required positional argument: \'data\'')

    cy.get('.stException .message')
      .eq(8)
      .should('have.text', 'TypeError: _native_chart() missing 1 required positional argument: \'chart\'')

    cy.get('.stException .message')
      .eq(9)
      .should('have.text', 'TypeError: map() missing 1 required positional argument: \'data\'')
  })
})