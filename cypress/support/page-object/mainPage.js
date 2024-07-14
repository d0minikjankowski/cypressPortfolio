class MainPage {
    get redRobot() {
        return cy.get(".peek")
    }
}

export default new MainPage();