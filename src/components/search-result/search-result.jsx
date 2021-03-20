import React from 'react'
import PropTypes from 'prop-types'
import './search-result.scss'

const cb = 'search-result'

export const SearchResult = ({name, img, color, id}) => (
    <a className={`${cb} ${cb}__${color}`} href={`/recipe/${id}`}>
        <img className={`${cb}__image`} src={img} alt={name} />
        <h3 className={`${cb}__heading`}>{name}</h3>
    </a>
)

SearchResult.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.string,
}
