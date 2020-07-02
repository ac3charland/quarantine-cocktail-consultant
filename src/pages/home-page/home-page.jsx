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
    }

    componentDidMount() {
        this.props.retrieveIngredients()
    }

    handleChange = e => this.setState({filter: e.target.value})

    render() {
        const {recipes} = this.props
        const {filter} = this.state

        let filteredRecipes

        

        if (recipes) {
            const sortedRecipes = recipes.sort(sortObjectsByName)
            filteredRecipes = filter ? sortedRecipes.filter(recipe => recipe.name.toLowerCase().includes(filter.toLowerCase())) : sortedRecipes
        }

        return (
            <div className={cb}>
                <ConnectedSearchBar />
                {!!filteredRecipes && (
                    <div className={`${cb}__filter-wrapper`}>
                        <label htmlFor='filter-input'>Filter results</label>
                        <input id='filter-input' type='text' value={this.state.filter} onChange={this.handleChange} />
                    </div>
                )}
                {filteredRecipes && filteredRecipes.map((recipe, idx) => (
                    <SearchResult key={idx} name={recipe.name} img={recipe.img} />
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