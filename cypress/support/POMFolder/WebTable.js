class WebTable {
    staticwebtable() {
        cy.get("div#HTML1 div table tbody tr").not(':first').each(($e1, index, $list) => {
            cy.wrap($e1).find('td').then(($cell) => {
                let a = $cell.text()
                cy.log(a)
                if (a.includes('Amod')) {
                    cy.log("success")
                    return false;
                }
            })
        })
    }

    dynamicWebTable() {
        let a
        let total = 0
        cy.get('div#HTML12 div table tbody tr').each(($e1, index, $list) => {
            cy.wrap($e1).find('td').eq(3).then(($cell) => {
                a = parseFloat(($cell.text()).replace(/[^\d.]/g, ''));
                total += a;
            })
        }).then(() => {
            cy.log(total)
        })

    }
    paginationwebtable() {
        cy.get('div#HTML8 div div table tbody tr').each(($e1, index, $list) => {
            cy.wrap($e1).find('td').then(($cell) => {
                cy.wrap($cell).find('input').check()
            })
        })
        cy.get('ul#pagination li a').each(($e1, index, $list) => {
            let a = $e1.text()
            if (a === '3') {
                cy.wrap($e1).click()
                cy.get('div#HTML8 div div table tbody tr').each(($e1, index, $list) => {
                    cy.wrap($e1).find('td').then(($cell) => {
                        cy.wrap($cell).find('input').check()
                    })
                })
            }
        })
    }
}

export default WebTable;