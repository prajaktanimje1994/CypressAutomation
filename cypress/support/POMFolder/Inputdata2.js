class Inputdata2
{
    checkboxes(){
    cy.get('#male').click()
    cy.get('#sunday').click()
    cy.get('#country').select('india')
    cy.get('#colors').select('green')
    }

    datepicker(){
    //cy.get('input#datepicker').click()
    cy.In()
    cy.get('table.ui-datepicker-calendar tbody tr td a[data-date="29"]').click()
    cy.get('a span.ui-icon-circle-triangle-w').dblclick()
    cy.get('table.ui-datepicker-calendar tbody tr td a[data-date="24"]').click()

    }

    datepicker2()
    {
        return cy.get('div#HTML15 h2')
        
    }

}

export default Inputdata2;