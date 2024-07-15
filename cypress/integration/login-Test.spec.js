/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

describe("Log in test.", () => {
    it("Log in and assert if you are on the main page.", () => {

        //navigate to the "https://www.saucedemo.com/v1/"
        cy.visit("/")

        //assert if the bot image and "swag labs" logo are visible:
        loginPage.botImage.should("be.visible")
        loginPage.swagLabsLogo.should("be.visible")

        //input credentials and log in:
        loginPage.inputUsername.click()
        loginPage.inputUsername.type("standard_user")
        loginPage.inputPassword.click();
        loginPage.inputPassword.type("secret_sauce");
        loginPage.btnLogin.click()

        //assert if you are on the main page:
        mainPage.redRobot.should("be.visible")

        //negative assert if login button is visible:
        loginPage.btnLogin.should("not.exist");


    })
})