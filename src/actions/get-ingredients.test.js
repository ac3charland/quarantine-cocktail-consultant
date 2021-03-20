import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {retrieveIngredients} from './get-ingredients'
import axios from 'axios'
const mockStore = configureStore([thunk])

describe('Retrieve Ingredients', () => {
    let store
    beforeEach(() => {
        store = mockStore()
        axios.get = jest.fn(() => Promise.resolve({data: {drinks: [{strIngredient1: 'Apple juice'}, {strIngredient1: 'Orange juice'}]}}))
    })

    it('dispatches correct action when retrieveIngredients is called', () => {
        return store.dispatch(retrieveIngredients()).then(() => {
            expect(store.getActions()).toEqual([
                {type: 'GET_INGREDIENTS'},
                {type: 'GET_INGREDIENTS_SUCCESS', data: ['Apple juice', 'Orange juice']},
            ])
        })
    })

    it('handles API error', () => {
        axios.get = jest.fn(() => Promise.reject())
        return store.dispatch(retrieveIngredients()).then(() => {
            expect(store.getActions()).toEqual([
                {type: 'GET_INGREDIENTS'},
                {type: 'GET_INGREDIENTS_FAILURE'},
            ])
        })
    })
})
