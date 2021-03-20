import axios from 'axios'
import {RECIPE_SEARCH_FAILURE, RECIPE_SEARCH_SUCCESS, RECIPE_SEARCH, RECIPE_SEARCH_NO_RESULTS} from '../utils/constants'

export function searchForRecipes(ingredient) {
    return dispatch => {
        dispatch({type: RECIPE_SEARCH})

        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.toLowerCase()}`)
            .then(data => {
                const recipes = data?.data?.drinks?.map(drink => ({name: drink.strDrink, img: drink.strDrinkThumb, id: drink.idDrink}))
                if (recipes?.length > 0) {
                    dispatch({type: RECIPE_SEARCH_SUCCESS, data: recipes})
                }
                else {
                    dispatch({type: RECIPE_SEARCH_NO_RESULTS})
                }
            }, err => dispatch({type: RECIPE_SEARCH_FAILURE}))
    }
}
