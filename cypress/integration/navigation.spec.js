import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'
import SecondaryPage from '../page/secondary-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
        cy.route('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list*', {data: {drinks: [{strIngredient1: 'a'}]}}).as('getIngredients')
    })

    it('navigates to proper pages with navbar links', () => {
        cy.visit('/')
        cy.wait('@getIngredients')
        cy.get(HomePage.wrapper)

        cy.get(NavBar.link).eq(0).click()

        cy.url().should('contain', '/secondary')
        cy.get(SecondaryPage.wrapper)

        cy.get(NavBar.homeLink).click()

        cy.url().should('contain', '/')
        cy.get(HomePage.wrapper)
    })
})