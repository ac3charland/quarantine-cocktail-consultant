import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {searchForRecipes} from './search-for-recipes'
import axios from 'axios'
const mockStore = configureStore([thunk])

describe('Search for Recipes', () => {
    let store
    beforeEach(() => {
        store = mockStore()
        axios.get = jest.fn(() => Promise.resolve({data: {drinks: [{strDrink: 'Apple juice', strDrinkThumb: 'a.jpg'}, {strDrink: 'Orange juice', strDrinkThumb: 'b.jpg'}]}}))
    })

    it('dispatches correct action when markHomePageAsVisited is called', () => {
        return store.dispatch(searchForRecipes('BlueMilk')).then(() => {
            expect(axios.get).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=bluemilk')
            expect(store.getActions()).toEqual([
                {type: 'RECIPE_SEARCH'},
                {type: 'RECIPE_SEARCH_SUCCESS', data: [{name: 'Apple juice', img: 'a.jpg'}, {name: 'Orange juice', img: 'b.jpg'}]},
            ])
        })
    })

    it('handles no results', () => {
        axios.get = jest.fn(() => Promise.resolve({data: {drinks: []}}))
        return store.dispatch(searchForRecipes('none')).then(() => {
            expect(store.getActions()).toEqual([
                {type: 'RECIPE_SEARCH'},
                {type: 'RECIPE_SEARCH_NO_RESULTS'},
            ])
        })
    })

    it('handles API error', () => {
        axios.get = jest.fn(() => Promise.reject())
        return store.dispatch(searchForRecipes('gonnaFail')).then(() => {
            expect(store.getActions()).toEqual([
                {type: 'RECIPE_SEARCH'},
                {type: 'RECIPE_SEARCH_FAILURE'},
            ])
        })
    })
})
