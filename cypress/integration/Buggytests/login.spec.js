/// <reference types="Cypress" />

 

describe('Login script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('testinput').as('input')
        

    })
  
    it('valid user login ', function () {
        
        cy.get(this.input.selector.inputLogin).type(this.input.register.username)
        cy.get(this.input.selector.inputPswd).type(this.input.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('li', 'Hi', + this.input.register.firstname ).should('be.visible')
        cy.contains('a', 'Logout').click()

    })
    it('invalid user should display an error ', function () {
        
        cy.generateRandomString(10).then(user => {
        cy.get(this.input.selector.inputLogin).type(user) })
        cy.generateRandomString(10).then(psd => {
            cy.get(this.input.selector.inputPswd).type(psd) })
        cy.contains('button', 'Login').click()
        cy.contains('Invalid username/password').should('be.visible')
        
    })
    
})
