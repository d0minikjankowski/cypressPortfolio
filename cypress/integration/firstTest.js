/// <reference types = "cypress" />

describe("Very first test", () => {
    it("Simply test: Open page and assert if the bot is visible", () => {

        //navigate to the "https://www.saucedemo.com/v1/"
        cy.visit("/")

        //assert if the bot image and "swag labs" logo are visible:
        cy.get(".bot_column").should("be.visible")
        cy.get(".login_logo").should("be.visible")
    })
})