import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './home-page.scss'
import {connect} from 'react-redux'
import {retrieveIngredients} from '../../actions/get-ingredients'
import {ConnectedSearchBar} from '../../components/search-bar/search-bar'
import {SearchResult} from '../../components/search-result/search-result'

const cb = 'home'

export default class HomePage extends Component {

    static propTypes = {
        retrieveIngredients: PropTypes.func,
        recipes: PropTypes.array,
    }

    componentDidMount() {
        this.props.retrieveIngredients()
    }

    render() {
        const {recipes} = this.props
        return (
            <div className={cb}>
                <ConnectedSearchBar />
                {recipes && recipes.map((recipe, idx) => (
                    <SearchResult key={idx} name={recipe.name} img={recipe.img}/>
                ))}
            </div>
        )
    }

}

export const mapStateToProps = state => ({
    recipes: state.recipes.recipes,
})

const mapDispatchToProps = dispatch => ({
    retrieveIngredients: () => dispatch(retrieveIngredients()),
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)