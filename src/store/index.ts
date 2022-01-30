import { combineReducers } from 'redux'
import fullscreenReducer from './fullscreen'
import editingSlideReducer from './editingSlide'
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    fullscreen: fullscreenReducer,
    editingSlide: editingSlideReducer,
})

// const store = createStore(rootReducer);
const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;