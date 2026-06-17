class SVGElements
{
    redcolor()
    {
        return cy.get('div.svg-container svg circle')
    }
    greencolor()
    {
        return cy.get('div.svg-container svg rect')
    }
    bluecolor()
    {
        return cy.get('div.svg-container svg polygon')
    }
}

export default SVGElements;