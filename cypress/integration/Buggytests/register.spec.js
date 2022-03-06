
describe('Register script for buggycarr', function () {

    beforeEach(function () {

        cy.visit('https://buggy.justtestit.org/')
        cy.fixture('testinput').as('input')

    })

    it('Register username password length', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('test')
        cy.get('[for=confirmPassword]').type('test')
        cy.contains('button', 'Register').click()
        //validation check for password length
        cy.get('.result').should('include.text',"InvalidParameter: 1 validation error(s) found.")
       
    })

    it('check password confirm password match ', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('test')
        cy.get('[for=confirmPassword]').type('test@1')
       //validation check for password do not match
        cy.contains("Passwords do not match").should('be.visible')

    })
    it('register form with invalid password not long enough', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test')
        cy.get('input[name=firstName]').type('test')
        cy.get('input[name=lastName]').type('test')
        cy.get('[for=password]').type('tes@12')
        cy.get('[for=confirmPassword]').type('tes@12')
        cy.contains('button', 'Register').click()
        //validation check for password policy length
        cy.contains("InvalidPasswordException: Password did not conform with policy: Password not long enough").should('be.visible')
        

    })


    it('all valid fields for registration', function () {

        cy.contains('a', 'Register').click()
        cy.get('input[name=username]').type('test').clear()
        cy.contains('Login is required').should('be.visible')
        cy.get('input[name=firstName]').type('test').clear()
        cy.contains('First Name is required').should('be.visible')
        cy.get('input[name=lastName]').type('test').clear()
        cy.contains('First Name is required').should('be.visible')
        cy.get('#password').type('wer').clear()
        cy.contains('Password is required').should('be.visible')
        cy.get('#confirmPassword').type('wer').clear()
        cy.contains('Passwords do not match').should('be.visible')
        

    })

    it('user is registered with valid password', function () {
        

        cy.contains('a', 'Register').click()
        cy.generateRandomString(10).then(username =>{
            cy.get(this.input.selector.inputUsername).type(username)
        })
        cy.generateRandomString(10).then(firstname =>{
            cy.get(this.input.selector.inputFirstname).type(firstname)

        })
        cy.generateRandomString(10).then(lastname =>{
            cy.get(this.input.selector.inputLastname).type(lastname)
        })
        cy.get(this.input.selector.inputPassword).type(this.input.register.password)
        cy.get(this.input.selector.inputConfirmpassword).type(this.input.register.password)
        cy.contains('button', 'Register').click()
        cy.contains('Registration is successful').should('be.visible')
        cy.contains('a', 'Cancel').click()
        cy.contains('a','Buggy Rating').should('be.visible')
        

    })
})
