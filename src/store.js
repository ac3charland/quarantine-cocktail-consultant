import reducers from './reducers'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default function makeStore() {

    const configureStore = () => (
        createStore(
            reducers,
            composeWithDevTools(applyMiddleware(thunk))
        )
    )

    let store
    if (module.hot) {
        store = global.__REDUX_STORE = global.__REDUX_STORE || configureStore()
        module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default))
        module.hot.accept()
    }
    else {
        store = configureStore()
    }

    return store
}
