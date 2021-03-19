import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import HomePage from './home-page'
import {SearchResult} from '../../components/search-result/search-result'

const mockStore = configureStore([thunk])
const cb = 'home'

describe('HomePage', () => {
    let props, render, store, mockState

    beforeEach(() => {
        mockState = {
            recipes: {
                recipes: [
                    {name: 'Orange juice', img: 'b.jpg'},
                    {name: 'Apple juice', img: 'a.jpg'},
                ],
                noResults: true,
            },
        }

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><HomePage {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('displays and sorts all recipes', () => {
        const component = render()
        expect(component.find(SearchResult).at(0).prop('name')).toEqual('Apple juice')
        expect(component.find(SearchResult).at(0).prop('img')).toEqual('a.jpg')
        expect(component.find(SearchResult).at(1).prop('name')).toEqual('Orange juice')
        expect(component.find(SearchResult).at(1).prop('img')).toEqual('b.jpg')
    })

    it('displays and filters recipes', () => {
        const component = render()
        component.find(`#filter-input`).simulate('change', {target: {value: 'aPpLe'}})
        expect(component.find(SearchResult).at(0).prop('name')).toEqual('Apple juice')
        expect(component.find(SearchResult).at(0).prop('img')).toEqual('a.jpg')
        expect(component.find(SearchResult).length).toEqual(1)
    })

    it('displays no results error message', () => {
        const component = render()
        expect(component.find(`.${cb}__error`).length).toEqual(1)
    })
})