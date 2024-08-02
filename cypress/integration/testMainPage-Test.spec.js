/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

describe("check main page localizators", () => {
    it("login", () => {
        cy.visit("/")
        cy.loginStandard()
    })

    it("dropdown sort button", () => {
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

    it("t-shirt", () => {
        mainPage.boltTshirt.should("exist")
    })

    it("jacket", () => {
        mainPage.jacket.should("exist")
    })

    it("onesie", () => {
        mainPage.onesie.should("exist")
    })

    it("red t-shirt", () => {
        mainPage.redTshirt.should("exist")
    })

    it("burger button", () => {
        mainPage.burgerBttn.should("exist")
    })

    it("add to cart1 ", () => {
        mainPage.addToCartBttn.eq(0).should("exist")
    })

    it("add to cart2", () => {
        mainPage.addToCartBttn.eq(1).should("exist")
    })

    it("add to cart3", () => {
        mainPage.addToCartBttn.eq(2).should("exist")
    })

    it("add to cart4", () => {
        mainPage.addToCartBttn.eq(3).should("exist")
    })

    it("add to cart5", () => {
        mainPage.addToCartBttn.eq(4).should("exist")
    })

    it("add to cart6", () => {
        mainPage.addToCartBttn.eq(5).should("exist")
    })
})