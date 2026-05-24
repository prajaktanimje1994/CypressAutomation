/// <reference types="Cypress" />
import Inputdata1 from '../../support/POMFolder/Inputdata1';

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
    const Inputdata = new Inputdata1();
    Inputdata.urlvisit('https://testautomationpractice.blogspot.com/');
    Inputdata.inputdata2(this.data.inputdata);
    cy.get('#textarea').type(this.data.inputdata)
    cy.log('test passed')
    

}
    )

})