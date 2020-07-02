import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {searchForRecipes} from '../../actions/search-for-recipes'

const cb = 'search-bar'

export default class SearchBar extends Component {
    static propTypes = {
        searchForRecipes: PropTypes.func,
    }

    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchForRecipes(this.state.search)
    }

    handleChange = e => {
        this.setState({search: e.target.value})
    }

    render() {
        const {search} = this.state
        return (
            <div className={cb}>
                <form onSubmit={this.handleSubmit}>
                    <input className={`${cb}__input`} type='text' value={search} onChange={this.handleChange}/>
                    <input className={`${cb}__submit`} type='submit'/>
                </form>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    searchForRecipes: ingredient => dispatch(searchForRecipes(ingredient)),
})

export const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar)