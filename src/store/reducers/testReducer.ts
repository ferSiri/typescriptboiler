interface ReducerElement {
    elementId: number;
    elementDetail: string;
};
type State = ReducerElement[];

export type Actions =
| {
    type: "addElement";
    elementId: number;
    elementDetail: string;
}
|{
    type: "removeElement";
    elementId: number;
};

const TestReducer = (state : State = [], action : Actions) =>{
    switch(action.type){
        case "addElement":
            return [...state, {elementId: action.elementId, elementDetail:action.elementDetail}];
        default:
            return state;
        }
};

export default TestReducer;