class Login
{
    login(data)
    {
        
        cy.get("#user-name").type(data.username)
        cy.get('#password').type(data.password)
        cy.get('#login-button').click()
    }
}

export default Login;