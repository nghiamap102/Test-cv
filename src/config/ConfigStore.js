import {applyMiddleware, combineReducers, compose, createStore, } from 'redux'
import thunk from 'redux-thunk'
import HomeReducer from '../component/home/reducer/reducer'
import UserReducer from '../component/userdetail/reducer/reducer'



const rootReducer = combineReducers({
    HomeReducer,
    UserReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
   
export default store 




