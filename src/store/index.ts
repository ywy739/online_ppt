import { Store } from 'antd/lib/form/interface'
import { combineReducers, createStore } from 'redux'
import fullscreenReducer from './fullscreen'

const rootReducer = combineReducers({
    fullscreen: fullscreenReducer,
})

let store = createStore(rootReducer);

export default store;