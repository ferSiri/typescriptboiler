import {Actions} from '../reducers/testReducer';

export const addElement = (elementId: number, elementDetail: string)=>{
    return {
        type: "addElement",
        elementId,
        elementDetail
    } as Actions;
}