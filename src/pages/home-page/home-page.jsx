import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './home-page.scss'
import {connect} from 'react-redux'
import {retrieveIngredients} from '../../actions/get-ingredients'
import {ConnectedSearchBar} from '../../components/search-bar/search-bar'
import {SearchResult} from '../../components/search-result/search-result'
import {sortObjectsByName} from '../../utils/sort'

const cb = 'home'

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {filter: ''}
    }

    static propTypes = {
        retrieveIngredients: PropTypes.func,
        recipes: PropTypes.array,
        noResults: PropTypes.bool,
    }

    componentDidMount() {
        this.props.retrieveIngredients()
    }

    handleChange = e => this.setState({filter: e.target.value})

    render() {
        const {recipes, noResults} = this.props
        const {filter} = this.state

        let filteredRecipes



        if (recipes) {
            const sortedRecipes = recipes.sort(sortObjectsByName)
            filteredRecipes = filter ? sortedRecipes.filter(recipe => recipe.name.toLowerCase().includes(filter.toLowerCase())) : sortedRecipes
        }

        return (
            <div className={cb}>
                <h2 className={`${cb}__heading`}>Find the perfect quarantine cocktail.</h2>
                <div className={`${cb}__about`}>
                    <p>All of us have been coping with quarantine in different ways.</p>
                    <p>For those of us turning to drink, here's a tool to help you try something new.</p>
                </div>
                <div className={`${cb}__form-wrapper`}>
                    <ConnectedSearchBar />
                    {!!filteredRecipes && (
                        <div className={`${cb}__filter-wrapper`}>
                            <label htmlFor='filter-input' className={`${cb}__filter-label`}>Filter results: </label>
                            <input id='filter-input' className={`${cb}__filter-input`} type='text' value={this.state.filter} onChange={this.handleChange} />
                        </div>
                    )}
                </div>
                {noResults && <p className={`${cb}__error`}>There were no results for your search. Try searching another ingredient.</p>}
                {filteredRecipes && filteredRecipes.map((recipe, idx) => {
                    const colors = ['red', 'green', 'yellow']
                    const colorIndex = idx % 3
                    return <SearchResult key={idx} name={recipe.name} img={recipe.img} color={colors[colorIndex]} />
                })}
            </div>
        )
    }

}

export const mapStateToProps = state => ({
    recipes: state.recipes.recipes,
    noResults: state.recipes.noResults,
})

const mapDispatchToProps = dispatch => ({
    retrieveIngredients: () => dispatch(retrieveIngredients()),
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)