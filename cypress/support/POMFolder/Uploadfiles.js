class Uploadfiles
{
    singleupload()
    {
        return cy.get('#singleFileInput')
    }

    multiupload()
    {
        return cy.get('#multipleFilesInput')
    }
    
}

export default Uploadfiles;