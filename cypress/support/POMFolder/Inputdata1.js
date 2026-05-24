class Inputdata1
{
    urlvisit(url)
    {
       cy.visit(url) 
    }
    inputdata2(data1)
    {
    cy.get('#name').type(data1)
    cy.get('#email').type(data1)
    cy.get('#phone').type(data1)
    cy.get('#textarea').type(data1)
    }
}

export default Inputdata1;

