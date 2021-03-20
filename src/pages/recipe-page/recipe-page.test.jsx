import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import RecipePage from './recipe-page'
import {searchForRecipeById} from '../../actions/search-for-recipe'

const mockStore = configureStore([thunk])
const cb = 'recipe'

jest.mock('../../actions/search-for-recipe', () => ({
    searchForRecipeById: jest.fn(() => ({type: 'script'})),
}))

describe('RecipePage', () => {
    let props, render, store, mockState

    beforeEach(() => {
        mockState = {
            selectedRecipe: {
                name: 'Hermina',
                img: 'a.jpg',
                instructions: 'Drink slowly',
                ingredients: ['a', 'b'],
                loaded: true,
            },
        }

        props = {
            match: {params: {id: 42}},
        }

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><RecipePage {...props} {...changedProps} /></Provider>)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders without crashing and displays props', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__heading`).text()).toEqual('Hermina')
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('a.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('')
        expect(component.find(`.${cb}__ingredient`).at(0).text()).toEqual('a')
        expect(component.find(`.${cb}__ingredient`).at(1).text()).toEqual('b')
        expect(component.find(`.${cb}__instructions`).text()).toEqual('Drink slowly')
    })

    it('calls recipe search action on mount', () => {
        render()
        expect(searchForRecipeById).toHaveBeenCalledTimes(1)
        expect(searchForRecipeById).toHaveBeenCalledWith(42)
    })
})