import React,{useContext,useReducer} from 'react';
import numberReducer from './numberReducer';

function Childtwo() {
    let [state,dispatch]=useReducer(numberReducer,50);
    return(
        <div>
            Iam child two.{state}
            <button onClick={()=>{dispatch({type:"INCREMENT"});}}>+</button>
            <button onClick={()=>{dispatch({type:"DECREMENT"});}}>-</button>
        </div>
    )
}
export default Childtwo;