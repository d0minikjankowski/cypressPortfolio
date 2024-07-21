/// <reference types = "cypress" />
import loginPage from "../support/page-object/loginPage"
import mainPage from "../support/page-object/mainPage"

// function printLoginError() {
//     if (loginPage.btnError.should("exist")) {
//         console.log("Incorrect password, user not logged in!")
//     }
//     else {
//         console.log("CZAKALAKA")
//     }
// } 

describe("[negative] Try to log in with an incorrect password", () => {
    it("wrong password for the standarcd ..d user:", () => {
        cy.visit("/")
        loginPage.inputUsername.type(Cypress.env("username_standard"))
        loginPage.inputPassword.type(Cypress.env("incorrectPassword"))
        loginPage.clickOnButtonLogin()
        loginPage.btnError.should("exist")
        loginPage.errorMessage.should("have.text",Cypress.env("incorrectPasswordErrorText"))
        
    })

})