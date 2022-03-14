import { AppState } from "../reducers";

const getTestState = (state : AppState )=>{
    return state.TestReducer;
};

export default getTestState;