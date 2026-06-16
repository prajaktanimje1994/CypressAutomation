class Datepickers
{
    datepicker1()
    {
        cy.get('#datepicker').click()
        cy.get('span.ui-icon-circle-triangle-w').dblclick()
        cy.get('a[data-date="25"]').click()
    }

    datepicker2()
    {
        cy.get('#txtDate').click()
        cy.get('select.ui-datepicker-year').select('2024')
        cy.get('select.ui-datepicker-month').select('10')
        cy.get('a[data-date="25"]').click()
        cy.get('span.ui-icon-circle-triangle-e').click()
    }

    datepicker3()
    {
        cy.get('#start-date').type('2025-10-10')
        cy.get('#end-date').type('2025-10-20')
        cy.get('button.submit-btn').click()
    }

    message()
    {
        return cy.get('div#result')
    }
}

export default Datepickers;