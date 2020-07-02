import {RECIPE_ID_SEARCH, RECIPE_ID_SEARCH_SUCCESS, RECIPE_ID_SEARCH_FAILURE} from '../utils/constants'

export function selectedRecipe(state = {}, action = {}) {
    switch (action.type) {
        case RECIPE_ID_SEARCH:
            return {...state, loadingResults: true, searchError: undefined, loaded: undefined}
        case RECIPE_ID_SEARCH_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const {name, instructions, img, ingredients} = action.data
            return {...state, name, instructions, img, ingredients, loadingResults: undefined, loaded: true}
        case RECIPE_ID_SEARCH_FAILURE:
            return {...state, searchError: true, loadingResults: undefined}
        default:
            return state
    }
}