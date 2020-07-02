import {ingredients} from './ingredients'
import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE} from '../utils/constants'

describe('Ingredients Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets loading flag to true when GET_INGREDIENTS is received', () => {
        const newState = ingredients(state, {type: GET_INGREDIENTS})
        expect(newState).toEqual({a: 'b', loadingIngredients: true})
    })

    it('writes data to state and clears failure and loading flags when GET_INGREDIENTS_SUCCESS is received', () => {
        const oldState = {...state, loadingIngredients: true, ingredientsError: true}
        const newState = ingredients(oldState, {type: GET_INGREDIENTS_SUCCESS, data: ['a', 'b']})
        expect(newState).toEqual({a: 'b', ingredients: ['a', 'b']})
    })

    it('sets failure flag and clears loading flag when GET_INGREDIENTS_FAILURE is received', () => {
        const oldState = {...state, loadingIngredients: true}
        const newState = ingredients(oldState, {type: GET_INGREDIENTS_FAILURE})
        expect(newState).toEqual({a: 'b', ingredientsError: true})
    })

    it('handles unknown action', () => {
        const newState = ingredients(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = ingredients(state)
        expect(newState).toEqual({a: 'b'})
    })
})