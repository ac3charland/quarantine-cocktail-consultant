import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {markHomePageAsVisited} from './mark-home-page'

const mockStore = configureStore([thunk])

describe('Mark Home Page', () => {
    let store
    beforeEach(() => {
        store = mockStore()
    })

    it('dispatches correct action when markHomePageAsVisited is called', () => {
        store.dispatch(markHomePageAsVisited())
        expect(store.getActions()).toEqual([{type: 'MARK_HOME_PAGE_AS_VISITED'}])
    })
})