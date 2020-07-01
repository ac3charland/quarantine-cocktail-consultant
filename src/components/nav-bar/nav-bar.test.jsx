import NavBar from './nav-bar'

const cb = 'navbar'

describe('NavBar', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<NavBar {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).prop('href')).toEqual('/secondary')
    })

    it('toggles between open and closed', () => {
        const component = render()

        expect(component.find('button.closed').length).toEqual(1)
        expect(component.find('button.open').length).toEqual(0)
        expect(component.find('.fa-bars').length).toEqual(1)
        expect(component.find('.fa-times').length).toEqual(0)

        component.find('.icon').simulate('click')
        
        expect(component.find('button.closed').length).toEqual(0)
        expect(component.find('button.open').length).toEqual(1)
        expect(component.find('.fa-bars').length).toEqual(0)
        expect(component.find('.fa-times').length).toEqual(1)
    })
})