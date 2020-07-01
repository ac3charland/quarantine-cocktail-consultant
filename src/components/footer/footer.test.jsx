import Footer from './footer'

const cb = 'footer'

describe('Footer', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<Footer {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__text`).text()).toEqual('Copyright © 2020 [CHANGE_ME_SITE_COMPANY_HERE]')
    })
})