class Guielements
{
    guielements(data)
    {
        cy.get('#name').type(data.name)
        cy.get('#email').type(data.email)
        cy.get('#phone').type(data.phone)
        cy.get('#textarea').type(data.address)
    }
}

export default Guielements;