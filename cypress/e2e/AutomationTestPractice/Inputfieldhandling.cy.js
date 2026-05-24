/// <reference types="Cypress" />
import Inputdata1 from '../../support/POMFolder/Inputdata1';
import Inputdata2 from '../../support/POMFolder/Inputdata2';

describe('test1',()=>
{
    const Inputdata = new Inputdata1();
    beforeEach(function()
    {
        Inputdata.urlvisit('https://testautomationpractice.blogspot.com/',{timeout:6000});
    }
)
    before(function(){
    
    cy.fixture('example').then(function(data)
{
    this.data = data
    cy.log(this.data)
    
})
});
    it('test1',function()
    {
    
    Inputdata.inputdata2(this.data.inputdata);
    cy.get('#textarea').type(this.data.inputdata)
    cy.log('test passed')
    

}
    )

    it('Test2',function(){
    const Checkbox = new Inputdata2();
    Checkbox.checkboxes();
    Checkbox.datepicker();
    Checkbox.datepicker2().should('have.text','Upload Files')
    

    })

})