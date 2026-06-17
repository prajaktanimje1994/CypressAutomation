class Mousehoverdoubleclick
{
    verifytextmh()
    {
        return cy.get('div#HTML3 div.widget-content p')
    }
    mousehover()
    {
        return cy.get('div.dropdown button')
    }
    selectvalue()
    {
        cy.get('div.dropdown-content a').each(($e1, index, $list)=>
        {
            let a = $e1.text()
            if(a==='Laptops')
            {
                cy.wrap($e1).click({force:true})
            }
        })
    }
    doubleclicktextverify()
    {
        return cy.get('div#HTML10 h2')
    }
    copytextbutton()
    {
        return cy.get('div#HTML10 div button')
    }
    verifyfield2text()
    {
        return cy.get('input#field2')
    }
}

export default Mousehoverdoubleclick;