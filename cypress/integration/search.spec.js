import HomePage from '../page/home-page'

context('Page Navigation', () => {
    beforeEach(() => {
        cy.server()
        cy.route('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list*', {data: {drinks: [{strIngredient1: 'a'}]}}).as('getIngredients')
        cy.route('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter*', {drinks: [{strDrink: 'a', strDrinkThumb: 'https://pyxis.nymag.com/v1/imgs/cae/b67/d03197f2d7f6b47586148fd421942a6a35-imagination.2x.rhorizontal.w700.jpg'}]}).as('search')
    })

    it('navigates to proper pages with navbar links', () => {
        cy.visit('/')
        cy.wait('@getIngredients')
        cy.get(HomePage.wrapper)

        cy.get(HomePage.searchField).type('test')
        cy.get(HomePage.submitSearch).click()

        cy.wait('@search')
        cy.get(HomePage.results)
    })
})