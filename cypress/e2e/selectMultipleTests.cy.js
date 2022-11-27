import { select } from "../support/selectSelectors"

describe('Interact with different types of drop-down', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/dropdowns')
      })

    it('Select the apple using visible text', () => {
        cy.get(select.fruits).select('Apple')
        cy.get(select.notification).should('have.text', 'You have selected Apple')
    })

    it.only('Select your super heros', () => {
        cy.get(select.superhero).select('Batman')
        cy.get(select.notification).should('have.text', 'Batman')
    })
})