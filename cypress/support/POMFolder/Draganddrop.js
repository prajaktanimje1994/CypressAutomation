class Draganddrop
{
    drag()
    {
        return cy.get('div#draggable')
    }
    drop()
    {
        return cy.get('div#droppable')
    }
}

export default Draganddrop;