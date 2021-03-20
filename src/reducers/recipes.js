import {RECIPE_SEARCH, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH_FAILURE, RECIPE_SEARCH_NO_RESULTS} from '../utils/constants'

export function recipes(state = {}, action = {}) {
    switch (action.type) {
        case RECIPE_SEARCH:
            return {...state, loadingResults: true, searchError: undefined, noResults: undefined, recipes: undefined}
        case RECIPE_SEARCH_SUCCESS:
            return {...state, recipes: action.data, loadingResults: undefined}
        case RECIPE_SEARCH_NO_RESULTS:
            return {...state, noResults: true, loadingResults: undefined}
        case RECIPE_SEARCH_FAILURE:
            return {...state, searchError: true, loadingResults: undefined}
        default:
            return state
    }
}
