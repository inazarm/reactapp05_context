import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props){
    let value=useContext(ValueContext);
    let orginalValue=value[1];
    return(
        <div>
            child number {value[0]}
            <button onClick={()=>{orginalValue(++value[0])}}>Increase Value</button>
        </div>

    );
}
export default Child;