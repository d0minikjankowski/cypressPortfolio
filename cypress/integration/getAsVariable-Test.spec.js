/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

describe ("saving attribute as a variable", () => {
    it ("log the link", () => {
        cy.visit("/")
        cy.loginStandard()
        cy.get("#item_5_title_link").invoke("attr", "href").then(link => {
            cy.log(link)
        })
    })

    it ("just a silly test to see if the link is saved as a variable", () => {
        cy.get("#item_5_title_link").invoke("attr", "href").then(link => {
            let variableLink = link
        cy.visit("/")
        loginPage.inputUsername.type(variableLink)
        })

    })
})