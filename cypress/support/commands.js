/// <reference types = "cypress" />
import loginPage from "./page-object/loginPage"
Cypress.Commands.add("loginOnMainPage", () => {
    // cy.visit("/")
    loginPage.inputUsername.click()
    loginPage.inputUsername.type("standard_user")
    loginPage.inputPassword.click();
    loginPage.inputPassword.type("secret_sauce");
    loginPage.btnLogin.click()
})

Cypress.Commands.add("goToUrl", () => {
    cy.visit("/")
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })