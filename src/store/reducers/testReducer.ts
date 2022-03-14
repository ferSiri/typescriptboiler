import {ActionType} from '../action-types';

interface ReducerElement {
    elementId: number;
    elementDetail: string;
};

export type State = ReducerElement[];

interface AddElement {
    type: ActionType.ADD_ELEMENT;
    elementId: number;
    elementDetail: string;
};

interface RemoveElement {
    type: ActionType.REMOVE_ELEMENT;
    elementId: number;
};

export type Actions = AddElement | RemoveElement;

const TestReducer = (state : State = [], action : Actions) =>{
    switch(action.type){
        case ActionType.ADD_ELEMENT:
            return [...state, {elementId: action.elementId, elementDetail:action.elementDetail}];
        default:
            return state;
        }
};

export default TestReducer;