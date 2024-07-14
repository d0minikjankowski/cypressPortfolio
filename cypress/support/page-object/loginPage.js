class LoginPage {

    get botImage() {
        return cy.get(".bot_column")
    }

    get swagLabsLogo() {
        return cy.get(".login_logo")
    }

    get inputUsername() {
        return cy.get("#user-name")
    }

    get inputPassword() {
        return cy.get("#password")
    }

    get btnLogin() {
        return cy.get("#login-button")
    }
}

export default new LoginPage();