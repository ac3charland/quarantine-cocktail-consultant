import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {retrieveIngredients} from '../../actions/get-ingredients'
import SearchBar from '../../components/search-bar/search-bar'
import {SearchResult} from '../../components/search-result/search-result'
import {sortObjectsByName} from '../../utils/sort'
import './home-page.scss'

const cb = 'home'

const HomePage = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    const recipes = useSelector(state => state.recipes.recipes)
    const noResults = useSelector(state => state.recipes.noResults)

    useEffect(() => {
        dispatch(retrieveIngredients())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let filteredRecipes
    if (recipes) {
        const sortedRecipes = recipes.sort(sortObjectsByName)
        filteredRecipes = filter ? sortedRecipes.filter(recipe => recipe.name.toLowerCase().includes(filter.toLowerCase())) : sortedRecipes
    }

    const handleChange = e => setFilter(e.target.value)

    return (
        <div className={cb}>
            <h2 className={`${cb}__heading`}>Find the perfect quarantine cocktail.</h2>
            <div className={`${cb}__about`}>
                <p>All of us have been coping with quarantine in different ways.</p>
                <p>For those of us turning to drink, here's a tool to help you try something new.</p>
            </div>
            <div className={`${cb}__form-wrapper`}>
                <SearchBar />
                {!!filteredRecipes && (
                    <div className={`${cb}__filter-wrapper`}>
                        <label htmlFor='filter-input' className={`${cb}__filter-label`}>Filter results: </label>
                        <input id='filter-input' className={`${cb}__filter-input`} type='text' value={filter} onChange={handleChange} />
                    </div>
                )}
            </div>
            {noResults && <p className={`${cb}__error`}>There were no results for your search. Try searching another ingredient.</p>}
            {filteredRecipes && filteredRecipes.map((recipe, idx) => {
                const colors = ['red', 'green', 'yellow']
                const colorIndex = idx % 3
                return <SearchResult key={idx} name={recipe.name} img={recipe.img} color={colors[colorIndex]} id={recipe.id} />
            })}
        </div>
    )
}

export default HomePage