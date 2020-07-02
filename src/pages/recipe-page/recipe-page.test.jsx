import RecipePage, {mapStateToProps} from './recipe-page'
jest.mock('../../components/search-bar/search-bar')

const cb = 'recipe'

describe('RecipePage', () => {
    let props, render

    beforeEach(() => {
        props = {
            name: 'Hermina',
            img: 'a.jpg',
            instructions: 'Drink slowly',
            ingredients: ['a', 'b'],
            loaded: true,
            searchForRecipeById: jest.fn(),
        }

        render = (changedProps = {}) => mount(<RecipePage {...props} {...changedProps} />)
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

    it('does not crash without props', () => {
        props = {}
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    describe('mapStateToProps', () => {
        [
            {
                description: 'undefined props',
                state: {selectedRecipe: {}},
                expected: {},
            },
            {
                description: 'populated props',
                state: {selectedRecipe: {loaded: true, img: 'a.jpg', ingredients: ['a', 'b'], name: 'Drink'}},
                expected: {ingredients: ['a', 'b'], name: 'Drink', img: 'a.jpg', loaded: true},
            },
        ].forEach(test => {
            it(`correctly maps state to props with ${test.description}`, () => {
                const result = mapStateToProps(test.state)
                expect(result).toEqual(test.expected)
            })
        })
    })
})