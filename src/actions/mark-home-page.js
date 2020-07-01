import {MARK_HOME_PAGE_AS_VISITED} from '../utils/constants'

export function markHomePageAsVisited() {
    return dispatch => {
        dispatch({type: MARK_HOME_PAGE_AS_VISITED})
    }
}