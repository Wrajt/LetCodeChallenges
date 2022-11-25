import { buttons } from "../support/buttonSelectors"

describe('Interact with different types of buttons', () => {
    it('Interact with different types of buttons', () => {
        cy.visit('https://letcode.in/buttons')
    
    //Goto Home and come back here
        cy.get(buttons.goHome).click()
        cy.url().should('eq', 'https://letcode.in/')
        cy.go('back')
        cy.url().should('eq', 'https://letcode.in/buttons')
    
    //Find the color of the button
        cy.get(buttons.findColour)
        .should('have.css', 'background-color', 'rgb(138, 77, 118)')
        
    //Confirm button is disabled
        cy.get(buttons.confirmDisabled).should('be.disabled')
            
    //Click and Hold Button
        cy.get(buttons.clickAndHold).click()
        cy.get(buttons.clickAndHold).contains('Button Hold!')

        cy.get(buttons.clickAndHold).trigger('mousedown').wait(5000)
        cy.get(buttons.clickAndHold).contains('Button has been long pressed')
                   
    })       
})
