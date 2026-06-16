class Footerlinks
{
    home()
    {
        return cy.get('div#PageList1 div ul li a[href*="http:"]')
    }
    hiddenelementandajax()
    {
        return cy.get('div#PageList1 div ul li a[href*="ajax"]')
    }
    downloadfiles()
    {
        return cy.get('div#PageList1 div ul li a[href*="download"]')
    }
}

export default Footerlinks;