/// <reference types="Cypress" />

import Login from "../../support/POMFolder/Login"

const ln = new Login()
describe('Login', function()
{
    beforeEach(()=>
    {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('Testdata1').then(function(data)
        {
            this.data = data
        })
    })
    
    it('login', function()
{ 
    ln.login(this.data)
})
})