import {recipes} from './recipes'
import {RECIPE_SEARCH, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH_FAILURE} from '../utils/constants'

describe('Recipes Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets loading flag to true when RECIPE_SEARCH is received', () => {
        const newState = recipes(state, {type: RECIPE_SEARCH})
        expect(newState).toEqual({a: 'b', loadingResults: true})
    })

    it('writes data to state and clears failure and loading flags when GET_INGREDIENTS_SUCCESS is received', () => {
        const oldState = {...state, loadingResults: true, searchError: true}
        const newState = recipes(oldState, {type: RECIPE_SEARCH_SUCCESS, data: ['a', 'b']})
        expect(newState).toEqual({a: 'b', recipes: ['a', 'b']})
    })

    it('sets failure flag and clears loading flag when GET_INGREDIENTS_FAILURE is received', () => {
        const oldState = {...state, loadingResults: true}
        const newState = recipes(oldState, {type: RECIPE_SEARCH_FAILURE})
        expect(newState).toEqual({a: 'b', searchError: true})
    })

    it('handles unknown action', () => {
        const newState = recipes(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = recipes(state)
        expect(newState).toEqual({a: 'b'})
    })
})