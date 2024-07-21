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

    get btnError() {
        return cy.get(".error-button")
    }

    get errorMessage() {
        return cy.get('[data-test="error"]')
    }

    clickOnButtonLogin() {
        this.btnLogin.click();
    }
}

export default new LoginPage();