import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {searchForRecipes} from '../../actions/search-for-recipes'
import './search-bar.scss'

const cb = 'search-bar'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(searchForRecipes(search))
    }

    return (
        <div className={cb}>
            <div className={`${cb}__form-wrapper`}>
                <form onSubmit={handleSubmit}>
                    <div className={`${cb}__input-wrapper`}>
                        <input id='search-input' className={`${cb}__input`} type='text' value={search} onChange={handleChange} />
                        <input className={`${cb}__submit`} type='submit' value='Search' />
                    </div>
                    <label htmlFor='search-input' className={`${cb}__subheading`}>Enter an ingredient to see a list of compatible drinks.</label>
                </form>
            </div>
        </div>
    )
}


export default SearchBar
