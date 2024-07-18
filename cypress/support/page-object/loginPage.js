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

    clickOnButtonLogin() {
        this.btnLogin.click();
    }
}

export default new LoginPage();