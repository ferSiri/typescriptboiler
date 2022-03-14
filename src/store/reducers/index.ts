
import TestReducer, {State as TestState} from './testReducer'
import {combineReducers} from 'redux'

interface State {
    TestReducer?: TestState;
};

const rootReducer = combineReducers<State>({
    TestReducer
})

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;