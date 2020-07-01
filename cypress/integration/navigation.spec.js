import NavBar from '../page/nav-bar'
import HomePage from '../page/home-page'
import SecondaryPage from '../page/secondary-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
    })

    it('navigates to proper pages with navbar links', () => {
        cy.visit('/')
        cy.get(HomePage.wrapper)

        cy.get(NavBar.link).eq(0).click()

        cy.url().should('contain', '/secondary')
        cy.get(SecondaryPage.wrapper)

        cy.get(NavBar.homeLink).click()

        cy.url().should('contain', '/')
        cy.get(HomePage.wrapper)
    })
})