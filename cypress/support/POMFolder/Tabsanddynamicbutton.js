class Tabsanddynamicbutton
{
    tabs()
    {
        return cy.get('#Wikipedia1_wikipedia-search-input')
    }
    searchbutton()
    {
        return cy.get('input.wikipedia-search-button')
    }
    startbutton()
    {
        return cy.get('button.start')
    }
    stopbutton()
    {
        return cy.get('button.stop')
    }
}

export default Tabsanddynamicbutton;