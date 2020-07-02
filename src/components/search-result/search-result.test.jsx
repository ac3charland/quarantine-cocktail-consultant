import {SearchResult} from './search-result'

const cb = 'search-result'

describe('SearchResult', () => {
    let props, render

    beforeEach(() => {
        props = {
            name: 'Drink title',
            img: 'b.jpg',
        }

        render = (changedProps = {}) => mount(<SearchResult {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).text()).toEqual('Drink title')
        expect(component.find(`.${cb}__image`).prop('src')).toEqual('b.jpg')
        expect(component.find(`.${cb}__image`).prop('alt')).toEqual('Drink title')
    })
})