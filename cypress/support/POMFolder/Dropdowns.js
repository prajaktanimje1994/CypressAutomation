class Dropdowns {
    country() {
        return cy.get('#country')
    }
    colors() {
        return cy.get('#colors')
    }

    sortedlist() {
        return cy.get('#animals')
    }

}

export default Dropdowns;