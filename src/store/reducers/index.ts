
import TestReducer from './testReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers<any>({
    TestReducer
})

export default rootReducer;