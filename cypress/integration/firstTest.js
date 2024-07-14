/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"

describe("Very first test", () => {
    it("Simply test: Open page and assert if the bot is visible", () => {

        //navigate to the "https://www.saucedemo.com/v1/"
        cy.visit("/")

        //assert if the bot image and "swag labs" logo are visible:
        loginPage.botImage.should("be.visible")
        loginPage.swagLabsLogo.should("be.visible")
    })
})