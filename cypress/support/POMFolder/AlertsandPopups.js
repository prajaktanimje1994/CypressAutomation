class AlertsandPopups
{
    simplealert()
    {
        cy.get('#alertBtn').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('I am an alert box!')
        })
    }
    confirmationalert()
    {
        cy.get('button[onclick*="myFunctionConfirm()"]').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a button!')
            return true;
        })
    }
    promptalert()
    {
        cy.window().then((win)=>
        {
            cy.stub(win,'prompt').returns('test')
        })
        cy.get('button[onclick*="myFunctionPrompt()"]').click()
    }
    popup()
    {
        return cy.get('button#PopUp')

    }
}

export default AlertsandPopups;