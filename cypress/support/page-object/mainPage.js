class MainPage {
    get redRobot() {
        return cy.get(".peek")
    }

    get swagLabsLogo() {
        return cy.get(".app_logo")
    }
}

export default new MainPage();