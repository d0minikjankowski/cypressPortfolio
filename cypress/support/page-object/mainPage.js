class MainPage {
    get redRobot() {
        return cy.get(".peek")
    }

    get swagLabsLogo() {
        return cy.get(".app_logo")
    }

    get sortDropdown() {
        return cy.get(".product_sort_container")
    }

    get cartIcon() {
        return cy.get('[data-icon="shopping-cart"]')
    }

    get backpack() {
        return cy.get('[src="./img/sauce-backpack-1200x1500.jpg"]')
    }

    get bikeLight() {
        return cy.get('[src="./img/bike-light-1200x1500.jpg"]')
    }
}

export default new MainPage();