import React from 'react'
import PropTypes from 'prop-types'
import './search-result.scss'

const cb = 'search-result'

export const SearchResult = ({name, img, color}) => (
    <div className={`${cb} ${cb}__${color}`}>
        <img className={`${cb}__image`} src={img} alt={name} />
        <h3 className={`${cb}__heading`}>{name}</h3>
    </div>
)

SearchResult.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string,
}