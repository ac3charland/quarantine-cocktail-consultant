import React from 'react'
import PropTypes from 'prop-types'
import './search-result.scss'

const cb = 'search-result'

export const SearchResult = ({name, img}) => (
    <div className={cb}>
        <img className={`${cb}__image`} src={img} alt={name} />
        <div>{name}</div>
    </div>
)

SearchResult.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
}