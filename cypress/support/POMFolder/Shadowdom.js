class Shadowdom
{
    mobiles()
    {
        return cy.get('div#HTML16 div div#shadow_host').shadow().find('span#shadow_content span')
    }
    laptops()
    {
        return cy.get('div#shadow_host').shadow().find('div#nested_shadow_host').shadow().find('div#nested_shadow_content div')
    }
    blog()
    {
        return cy.get('div#shadow_host').shadow().find('a')
    }
    textbox()
    {
        return cy.get('div#shadow_host').shadow().find('input[type="text"]')
    }
    checkbox()
    {
        return cy.get('div#shadow_host').shadow().find('input[type="checkbox"]')
    }
    file()
    {
        return cy.get('div#shadow_host').shadow().find('input[type="file"]')
    }
    youtube()
    {
        return cy.get('a[href*="youtube"]')
    }
    
}

export default Shadowdom;