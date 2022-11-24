import { inputFields } from "../support/inputSelectors"

describe('Interact with different types of input fields', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/edit')
      })
    it('Enter your full Name', () => {
        cy.get(inputFields.fullName).then(firstInputField => {
            cy.wrap(firstInputField).type('Full Name').should('have.value', 'Full Name')
            
        })
    })
    it('Append a text and press keyboard tab', () => {
        cy.get(inputFields.appendText).then(secondInputField => {
            cy.wrap(secondInputField).should('have.value', 'I am good')
            .click()
            .type(' thanks')
            .should('have.value', 'I am good thanks')
            .tab()
        })
    })

    it('What is inside the text box', () => {
        cy.get(inputFields.whatsInside).invoke('val').then(thirdInputField => {
            const fieldContent = thirdInputField;
            cy.log(fieldContent);
            expect(fieldContent).to.equal('ortonikc')
        });    
    })

    it('Clear the text', () => {
        cy.get(inputFields.clearText).then(fourthInputField => {
            cy.wrap(fourthInputField).clear().should('have.value', '')
        })
    })


    it('Confirm edit field is disabled', () => {
        cy.get(inputFields.confirmDisabled).then(fifthInputField => {
            cy.wrap(fifthInputField).should('be.disabled')
        })
    })

    it('Confirm text is readonly', () => {
        cy.get(inputFields.confirmReadonly)
        .invoke('prop', 'readOnly').then(property => {
        expect(property).to.equal(true)
        })
    })
})



