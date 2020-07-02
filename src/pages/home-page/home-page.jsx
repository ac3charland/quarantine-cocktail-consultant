import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './home-page.scss'
import {connect} from 'react-redux'
import {retrieveIngredients} from '../../actions/get-ingredients'

const cb = 'home'

export default class HomePage extends Component {

    static propTypes = {
        retrieveIngredients: PropTypes.func,
    }

    componentDidMount() {
        this.props.retrieveIngredients()
    }

    render() {
        return (
            <div className={cb}>
                <h1 className={`${cb}__heading`}>Long home page!</h1> 
                <p>(Footer is below the fold)</p>
            </div>
        )
    }

}

export const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    retrieveIngredients: () => dispatch(retrieveIngredients()),
})

export const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)