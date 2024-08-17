/* eslint-disable @typescript-eslint/no-explicit-any*/
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'
import rootReducer from '../reducers/index'

export default function ConfigureStore():any {

    return createStore(
        rootReducer,
        {},
        composeWithDevTools(applyMiddleware(thunk, logger)),
    )
}
