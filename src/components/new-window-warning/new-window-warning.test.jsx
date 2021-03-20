import NewWindowScreenReaderWarning from './new-window-warning'

const cb = 'sr-only'

describe('NewWindowScreenReaderWarning', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<NewWindowScreenReaderWarning {...props} {...changedProps} />)
    })

    it('renders without crashing and displays default screen reader warning when props are undefined', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}`).text()).toEqual('(Opens a new window)')
    })

    it('displays custom screen reader warning message', () => {
        props.customMessage = 'Warning: will open Rick Astley\'s "Never Gonna Give You Up" in a new window'
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}`).text()).toEqual('Warning: will open Rick Astley\'s "Never Gonna Give You Up" in a new window')
    })
})
