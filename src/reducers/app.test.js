import {app} from './app'
import {MARK_HOME_PAGE_AS_VISITED} from '../utils/constants'

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets homePageVisted flag to true when MARK_HOME_PAGE_AS_VISITED is received', () => {
        const newState = app(state, {type: MARK_HOME_PAGE_AS_VISITED})
        expect(newState).toEqual({a: 'b', homePageVisted: true})
    })

    it('handles unknown action', () => {
        const newState = app(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = app(state)
        expect(newState).toEqual({a: 'b'})
    })
})