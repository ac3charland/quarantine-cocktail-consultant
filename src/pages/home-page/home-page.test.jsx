import HomePage, {mapStateToProps} from './home-page'
import {SearchResult} from '../../components/search-result/search-result'
jest.mock('../../components/search-bar/search-bar')

const cb = 'home'

describe('HomePage', () => {
    let props, render

    beforeEach(() => {
        props = {
            retrieveIngredients: jest.fn(),
        }

        render = (changedProps = {}) => mount(<HomePage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('displays and sorts all recipes', () => {
        props.recipes = [
            {name: 'Orange juice', img: 'b.jpg'},
            {name: 'Apple juice', img: 'a.jpg'},
        ]
        const component = render()
        expect(component.find(SearchResult).at(0).prop('name')).toEqual('Apple juice')
        expect(component.find(SearchResult).at(0).prop('img')).toEqual('a.jpg')
        expect(component.find(SearchResult).at(1).prop('name')).toEqual('Orange juice')
        expect(component.find(SearchResult).at(1).prop('img')).toEqual('b.jpg')
    })

    it('displays and filters recipes', () => {
        props.recipes = [
            {name: 'Orange juice', img: 'b.jpg'},
            {name: 'Apple juice', img: 'a.jpg'},
        ]
        const component = render()
        component.setState({filter: 'aPpLe'})
        expect(component.find(SearchResult).at(0).prop('name')).toEqual('Apple juice')
        expect(component.find(SearchResult).at(0).prop('img')).toEqual('a.jpg')
        expect(component.find(SearchResult).length).toEqual(1)
    })

    describe('mapStateToProps', () => {
        [
            {
                description: 'undefined props',
                state: {recipes: {}},
                expected: {},
            },
            {
                description: 'populated props',
                state: {recipes: {recipes: ['a', 'b', 'c']}},
                expected: {recipes: ['a', 'b', 'c']},
            },
        ].forEach(test => {
            it(`correctly maps state to props with ${test.description}`, () => {
                const result = mapStateToProps(test.state)
                expect(result).toEqual(test.expected)
            })
        })
    })
})