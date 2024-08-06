/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

describe("Standard log in and assertions on the login page:", () => {

    it("Log in standard user:", () => {
        cy.goToUrl()
        cy.loginStandard()
        // cy.wait(5000)
    })

    it("Assert if you are on the main page:", () => {
        mainPage.redRobot.should("be.visible") //check if the red robot icon is visible
        mainPage.swagLabsLogo.should("be.visible") //check of the SwagLabs logo is visible
        loginPage.btnLogin.should("not.exist") //check if the login button from the login page is not present
    })
})