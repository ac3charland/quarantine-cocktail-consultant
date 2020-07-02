import {combineReducers} from 'redux'
import {ingredients} from './ingredients'
import {recipes} from './recipes'
import {selectedRecipe} from './selected-recipe'

export default combineReducers({
    ingredients,
    recipes,
    selectedRecipe,
})