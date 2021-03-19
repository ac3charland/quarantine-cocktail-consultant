import SearchBar from './search-bar'
jest.mock('react-redux')

const cb = 'search-bar'

describe('SearchBar', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<SearchBar {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('sets value to state when input is typed in form', () => {
        const component = render()
        component.find(`.${cb}__input`).simulate('change', {target: {value: 'rum'}})
        expect(component.find(`.${cb}__input`).props().value).toEqual('rum')
    })
})