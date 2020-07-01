import {MARK_HOME_PAGE_AS_VISITED} from '../utils/constants'

export function app(state = {}, action = {}) {
    switch(action.type) {
        case MARK_HOME_PAGE_AS_VISITED:
            return {...state, homePageVisted: true}
        default:
            return state
    }
}