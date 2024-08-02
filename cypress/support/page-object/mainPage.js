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

    get boltTshirt() {
        return cy.get('[src="./img/bolt-shirt-1200x1500.jpg"]')
    }

    get jacket() {
        return cy.get("#item_5_title_link")
    }

    get onesie() {
        return cy.contains("[class=inventory_item_name]", "Sauce Labs Onesie")
    }

    get redTshirt() {
        return cy.contains("[class=inventory_item_name]", "Test.allTheThings() T-Shirt (Red)")
    }

    get burgerBttn() {
        return cy.get(".bm-burger-button")
    }

    get addToCartBttn() {
        return cy.get(".btn_primary.btn_inventory")
    }
}

export default new MainPage();