import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './recipe-page.scss'
import {connect} from 'react-redux'
import {searchForRecipeById} from '../../actions/search-for-recipe'
import {emptyfunction} from '../../utils/constants'

const cb = 'recipe'

export default class RecipePage extends Component {

    static propTypes = {
        searchForRecipeById: PropTypes.func,
        name: PropTypes.string,
        img: PropTypes.string,
        instructions: PropTypes.string,
        ingredients: PropTypes.array,
        loaded: PropTypes.bool,
    }

    static defaultProps = {
        searchForRecipeById: emptyfunction,
    }

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        const {id} = this.props.match?.params || {}
        this.props.searchForRecipeById(id)
    }


    render() {
        const {name, img, instructions, ingredients, loaded} = this.props
        return (
            <div className={cb}>
                <h2 className={`${cb}__heading`}>{name ? name : 'Loading...'}</h2>
                {loaded && (
                    <div className={`${cb}__flex-container`}>
                        <div className={`${cb}__image-wrapper`}>
                            <img className={`${cb}__image`} src={img} alt={''} />
                        </div>
                        <div className={`${cb}__text-wrapper`}>
                            <h3 className={`${cb}__subheading`}>Ingredients</h3>
                            <ul>
                                {ingredients.map((ing, idx) => (
                                    <li key={idx} className={`${cb}__ingredient`}>{ing}</li>
                                ))}
                            </ul>
                            <h3 className={`${cb}__subheading`}>Instructions</h3>
                            <p className={`${cb}__instructions`}>{instructions}</p>
                        </div>
                    </div>
                )}
                <a className={`${cb}__back-button`} href='/'>Back</a>
            </div>
        )
    }

}

export const mapStateToProps = state => ({
    loaded: state.selectedRecipe.loaded,
    name: state.selectedRecipe.name,
    img: state.selectedRecipe.img,
    instructions: state.selectedRecipe.instructions,
    ingredients: state.selectedRecipe.ingredients,
})

const mapDispatchToProps = dispatch => ({
    searchForRecipeById: (id, color) => dispatch(searchForRecipeById(id, color)),
})

export const ConnectedRecipePage = connect(mapStateToProps, mapDispatchToProps)(RecipePage)