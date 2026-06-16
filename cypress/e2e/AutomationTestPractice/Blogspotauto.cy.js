/// <reference types="Cypress" />

import Datepickers from "../../support/Datepickers"
import AlertsandPopups from "../../support/POMFolder/AlertsandPopups"
import Checkboxes from "../../support/POMFolder/Checkboxes"
import Dropdowns from "../../support/POMFolder/Dropdowns"
import Footerlinks from "../../support/POMFolder/Footerlinks"
import Form from "../../support/POMFolder/Form"
import Guielements from "../../support/POMFolder/Guielements"
import Shadowdom from "../../support/POMFolder/Shadowdom"
import Tabsanddynamicbutton from "../../support/POMFolder/Tabsanddynamicbutton"
import Uploadfiles from "../../support/POMFolder/Uploadfiles"
import WebTable from "../../support/POMFolder/WebTable"

const ge = new Guielements()
const cb = new Checkboxes()
const dd = new Dropdowns()
const dp = new Datepickers()
const uf = new Uploadfiles()
const wt = new WebTable()
const form = new Form()
const sd = new Shadowdom()
const fl = new Footerlinks()
const td = new Tabsanddynamicbutton()
const ap = new AlertsandPopups()
describe('automation', () => {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.fixture('Testdata1').then(function (data) {
            this.data = data;
        })
    }
    )

    it('guielements', function () {
        ge.guielements(this.data)
    })

    it('checkbox', () => {
        cb.malecheckbox()
        let e = cb.daycheckbox()
        e.sunday().check()
        e.monday().should('not.be.checked')
        e.monday().check()
        e.sunday().should('be.checked')
    })

    it('dropdowns', () => {
        dd.colors().select('yellow')
        dd.country().select('india')
        dd.sortedlist().select('deer')
        dd.colors().should('contain.value','yellow')
        
    })

    it('datepicker',()=>
    {
        dp.datepicker1()
        dp.datepicker2()
        dp.datepicker3()
        dp.message().should('have.text','You selected a range of 10 days.')
    })

    it('uploadfiles',()=>
    {
        uf.singleupload().selectFile('cypress/fixtures/Testdata1.json')
        uf.multiupload().selectFile(['cypress/fixtures/Test.text','cypress/fixtures/Testdata1.json'])
    })

    it('webtable',()=>
    {
        wt.staticwebtable()
        wt.dynamicWebTable()
        wt.paginationwebtable()
        cy.get('div#HTML8 div div table tbody tr').find('td input').eq(3).should('be.checked')
    })
    it('form',function()
    {
        form.section1().type(this.data.name)
        cy.get('#btn1').click()
        //form.section1().should('have.text','test')
        form.section2().type(this.data.email)
        cy.get('#btn2').click()
        //form.section2().should('have.text','test@123')
        form.section3().type(this.data.address)
        cy.get('#btn3').click()
        //form.section3().should('have.text','Test@123456')
    })
    it('shadowdom',()=>
    {
        sd.laptops().should('have.text','Laptops')
        sd.mobiles().should('contain.text','Mobiles')
        //sd.blog().url().should('include','https://www.pavantestingtools.com/')
        sd.textbox().type('test')
        sd.checkbox().check()
        sd.checkbox().should('be.checked')
        sd.file().click()
        sd.youtube().should('contain.text','Youtube')
    })
    it('footerlinks',()=>
    {
        fl.home().should('have.text','Home')
        fl.hiddenelementandajax().should('have.text','Hidden Elements & AJAX')
        fl.downloadfiles().should('have.text','Download Files')
    })
    it('tabsdynamic',()=>
    {
        td.tabs().type('te')
        td.searchbutton().click()
        td.startbutton().click()
        td.stopbutton().click()
        td.startbutton().should('have.text','START')
    })
    it.only('alertsandpopups',()=>
    {
        ap.simplealert()
        ap.confirmationalert()
        ap.promptalert()
        cy.get('p#demo').should('contain.text','test')
        ap.popup().click()
    })
})