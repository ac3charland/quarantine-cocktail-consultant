import {RECIPE_SEARCH, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH_FAILURE} from '../utils/constants'

export function recipes(state = {}, action = {}) {
    switch (action.type) {
        case RECIPE_SEARCH:
            return {...state, loadingResults: true}
        case RECIPE_SEARCH_SUCCESS:
            return {...state, recipes: action.data, loadingResults: undefined, searchError: undefined}
        case RECIPE_SEARCH_FAILURE:
            return {...state, searchError: true, loadingResults: undefined}
        default:
            return state
    }
}