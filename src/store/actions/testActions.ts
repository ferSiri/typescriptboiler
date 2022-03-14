import {Actions} from '../reducers/testReducer';

export const addElement = (elementId: number, elementDetail: string)=>{
    return <Actions> {
        type: "addElement",
        elementId,
        elementDetail
    };
}