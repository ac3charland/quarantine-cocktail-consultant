import React, {Component} from 'react'
import './nav-bar.scss'
import {SECONDARY_PAGE_URL} from '../../utils/constants'

const cb = 'navbar'

export default class NavBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        })
    }
    
    render() {
        const menuCSS = this.state.menuOpen ? 'open' : 'closed'
        const menuIcon = this.state.menuOpen ? 'fa-times' : 'fa-bars'

        return (
            <div className={cb}>
                <a className={`${cb}__home`} href='/'><h1 className={`${cb}__heading`}>[CHANGE_ME_SITE_TITLE]</h1></a>
                <div className={`${cb}__links ${menuCSS}`}>
                    <button className={`icon ${menuCSS}`} onClick={() => this.toggleMenu()}><i className={`fa ${menuIcon}`}></i></button>
                    <a id={'secondary-link'} className={`${cb}__link ${menuCSS}`} href={SECONDARY_PAGE_URL}>CHANGE_ME SECONDARY_LINK</a>
                </div>
            </div>
        )
    }

}