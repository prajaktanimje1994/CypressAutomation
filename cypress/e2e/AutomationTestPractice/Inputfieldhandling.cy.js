/// <reference types="Cypress" />

describe('test1',()=>
{
    before(function(){
    cy.fixture('example').then(function(data)
{
    this.data = data
    cy.log(this.data)
})
});
    it('test1',function()
    {
    cy.visit('https://testautomationpractice.blogspot.com/'),
    cy.get('#name').type(this.data.inputdata)
    cy.get('#email').type(this.data.inputdata)
    cy.get('#phone').type(this.data.inputdata)
    cy.get('#textarea').type(this.data.inputdata)
    

}
    )

})