import axios from 'axios'
import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE} from '../utils/constants'

export function retrieveIngredients() {
    return dispatch => {
        dispatch({type: GET_INGREDIENTS})

        return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            .then(data => {
                const ingredients = data?.data?.drinks?.map(obj => obj.strIngredient1)
                dispatch({type: GET_INGREDIENTS_SUCCESS, data: ingredients})
            }, err => dispatch({type: GET_INGREDIENTS_FAILURE}))
    }
}
