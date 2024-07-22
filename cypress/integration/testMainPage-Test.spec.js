/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

describe("check main page localizators", () => {
    it("dropdown", () => {
        cy.visit("/")
        cy.loginStandard()
        mainPage.sortDropdown.should("exist")
    })

    it("cart icon", () => {
        mainPage.cartIcon.should("exist")
    })

    it("backpack", () => {
        mainPage.backpack.should("exist")
    })

    it("bike light", () => {
        mainPage.bikeLight.should("exist")
    })
})