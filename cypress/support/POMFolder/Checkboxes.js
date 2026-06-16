class Checkboxes
{
    malecheckbox()
    {
        cy.get('#male').check()   //single webelement declaration

    }
    daycheckbox()
    {
        return{
            sunday: ()=>cy.get('#sunday'),       //multiple webelement declaration
            monday: ()=>cy.get('#monday')
    }
    }
}

export default Checkboxes;