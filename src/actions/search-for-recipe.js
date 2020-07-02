import axios from 'axios'
import {RECIPE_ID_SEARCH, RECIPE_ID_SEARCH_SUCCESS, RECIPE_ID_SEARCH_FAILURE} from '../utils/constants'

export function searchForRecipeById(id) {
    return dispatch => {
        dispatch({type: RECIPE_ID_SEARCH})

        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(data => {
                const drink = data?.data?.drinks[0]
                let ingredients = []
                for (let i = 1; i <= 15; i++) {
                    let ratio = drink[`strMeasure${i}`]
                    let ingredient = drink[`strIngredient${i}`]
                    if (ingredient) {
                        const ingredientText = ratio ? (ratio + ingredient) : ingredient
                        ingredients.push(ingredientText)
                    }
                }

                dispatch({
                    type: RECIPE_ID_SEARCH_SUCCESS, data: {
                        name: drink.strDrink,
                        instructions: drink.strInstructions,
                        img: drink.strDrinkThumb,
                        ingredients,
                    },
                })
            }, err => dispatch({type: RECIPE_ID_SEARCH_FAILURE}))
    }
}