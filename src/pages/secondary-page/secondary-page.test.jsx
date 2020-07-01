import SecondaryPage from './secondary-page'

const cb = 'secondary'

describe('SecondaryPage', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<SecondaryPage {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})