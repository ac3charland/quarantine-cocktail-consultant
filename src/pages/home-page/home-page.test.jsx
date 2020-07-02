import HomePage, {mapStateToProps} from './home-page'

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
                state: {},
                expected: {},
            },
            {
                description: 'populated props',
                state: {},
                expected: {},
            },
        ].forEach(test => {
            it(`correctly maps state to props with ${test.description}`, () => {
                const result = mapStateToProps(test.state)
                expect(result).toEqual(test.expected)
            })
        })
    })
})