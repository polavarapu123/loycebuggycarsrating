/// <reference types="Cypress" />

 

describe(' user profile', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('testinput').as('input')
        

    })
  
    it('profile can be updated without any updates', function () {
        
        cy.get(this.input.selector.inputLogin).type(this.input.register.username)
        cy.get(this.input.selector.inputPswd).type(this.input.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        

    })
    it(' Kitting is a valid jhobby, but showed unknown error', function () {
        
        cy.get(this.input.selector.inputLogin).type(this.input.register.username)
        cy.get(this.input.selector.inputPswd).type(this.input.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.get('#gender').type(this.input.register.gender)
        cy.get('#age').type(this.input.register.age)
        cy.get('#address').type(this.input.register.address)
        cy.get('#hobby').select(this.input.register.hobby)
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        cy.get('#gender').clear()
        cy.get('#age').clear()
        cy.get('#address').clear()
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('The profile has been saved successful').should('be.visible')
        
    })
    
    it('invalid password message should be visible', function () {
        
        cy.get(this.input.selector.inputLogin).type(this.input.register.username)
        cy.get(this.input.selector.inputPswd).type(this.input.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('a', 'Profile').click()
        cy.get('#currentPassword').type('T@sts123')
        cy.get('#newPassword').type('T@sts145')
        cy.get('#newPasswordConfirmation').type('T@sts145')
        cy.contains('button', 'Save').click()
        cy.get('.result').contains('NotAuthorizedException: Incorrect username or password').should('be.visible')
        
    })
})
