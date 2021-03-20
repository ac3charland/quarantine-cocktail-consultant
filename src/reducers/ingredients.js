import {GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE, GET_INGREDIENTS} from '../utils/constants'

export function ingredients(state = {}, action = {}) {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {...state, loadingIngredients: true}
        case GET_INGREDIENTS_SUCCESS:
            return {...state, ingredients: action.data, loadingIngredients: undefined, ingredientsError: undefined}
        case GET_INGREDIENTS_FAILURE:
            return {...state, ingredientsError: true, loadingIngredients: undefined}
        default:
            return state
    }
}
