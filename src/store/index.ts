import { combineReducers } from 'redux'
import fullscreenReducer from './fullscreen'
import editingSlideReducer from './editingSlide'
import allSlidesReducer from './allSlides'
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore } from "redux"
import { save, load } from "redux-localstorage-simple"

const rootReducer = combineReducers({
    fullscreen: fullscreenReducer,
    editingSlide: editingSlideReducer,
    allSlides: allSlidesReducer,
})

// const store = createStore(rootReducer);
//const store = configureStore({reducer: rootReducer});


/*
    Saving to LocalStorage is achieved using Redux 
    middleware. The 'save' method is called by Redux 
    each time an action is handled by your reducer.
*/    
const createStoreWithMiddleware 
    = applyMiddleware(
        // Saving done here
        //Save specific parts of the state tree.
        save({ 
            states: ['editingSlide', "allSlides"],
            debounce: 500,
         })
    )(createStore)

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/  
const store = createStoreWithMiddleware(
    rootReducer,  
    load({
        states: ['editingSlide', "allSlides"],
    }) // Loading done here
)    

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;