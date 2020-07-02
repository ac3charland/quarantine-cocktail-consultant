import HomePage, {mapStateToProps} from './home-page'
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