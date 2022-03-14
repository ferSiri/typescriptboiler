import React, {useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {addElement} from './store/actions/testActions';
import getTestState from './store/selectors/testSelectors';

const App : React.FC = () => {
    const elements = useSelector(getTestState);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(addElement(Math.floor(Math.random() * 1000000), "bla bla bla"))}></button>
            <ul>
                {elements.map((el: any)=><div>{el.elementId}</div>)}
            </ul>

        </div>
    )

}

export default App;
