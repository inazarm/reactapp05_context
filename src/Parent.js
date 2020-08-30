import React from 'react';
import Child from './Child';
import Childtwo from './Childtwo'

function Parent(props){
    return(
        <div>
            Parent;
            <Child></Child>
            <Childtwo></Childtwo>
        </div>
    );
}
export default Parent;