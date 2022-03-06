/// <reference types="Cypress" />

 

describe('User goes to vote page', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('testinput').as('input')
        

    })
  
    it('user goes to popular vote', function () {
        
        cy.contains('h2','Popular Model').should('be.visible')
        cy.get('[src="/img/cars/Lamborghini-Logo.png"]').click()
        cy.scrollTo('center')
        cy.contains('a', 'Model').should('be.visible')
        cy.contains('a', 'Rank').should('be.visible')
        cy.contains('a', 'Votes').should('be.visible')
        cy.get('.comments').contains('Comments').should('be.visible')
        cy.contains('a', 'Diablo').click()
        cy.url().should('include', '/model')
        cy.contains('You need to be logged in to vote.').should('be.visible')
        cy.get('[src="/img/cars/Lamborghini-Logo.png"]').click()
        cy.url().should('include', '/make')
        
    })

    it('user goes to poplular model', function () {
        
        cy.contains('h2','Popular Make').should('be.visible')
        cy.get('[src="/img/cars/Diablo.jpg"]').click()
        cy.contains('th', 'Date').should('be.visible')
        cy.contains('th', 'Author').should('be.visible')
        cy.contains('th', 'Comment').should('be.visible')
        cy.url().should('include', '/model')
        cy.contains('You need to be logged in to vote.').should('be.visible')
        cy.get('[src="/img/cars/Diablo.jpg"]').click()
        cy.url().should('eql','https://buggy.justtestit.org/')

        
    })
    

    it('user checks overall rating', function () {
        
        cy.contains('h2','Overall Rating').should('be.visible')
        cy.get('[src="/img/overall.jpg"]').click()
        cy.url().should('include', '/overall')
        cy.contains('a', 'Model').should('be.visible')
        cy.contains('a', 'Rank').should('be.visible')
        cy.contains('a', 'Votes').should('be.visible')
        cy.contains('a', 'Engine').should('be.visible')
        cy.get('.comments').contains('Comments').should('be.visible')
        cy.contains('Lamborghini').click()
        cy.url().should('include', '/make')
        
        
    })

    it('loggged in users only can vote', function () {
        
        
        cy.get(this.input.selector.inputLogin).type(this.input.register.username)
        cy.get(this.input.selector.inputPswd).type(this.input.register.password)
        cy.contains('button', 'Login').click()
        cy.contains('h2','Overall Rating').should('be.visible')
        cy.get('[src="/img/overall.jpg"]').click()
        cy.url().should('include', '/overall')
        cy.contains('a', 'View more').click()
        cy.contains('button', 'Vote').should('be.visible')
   
      
    })

    
})
