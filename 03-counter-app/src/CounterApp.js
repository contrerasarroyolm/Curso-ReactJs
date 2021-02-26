import React, { useState } from 'react'
import Proptypes from 'prop-types'

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value );    //[]
    
    //handledAdd
    const handledAdd = (e) => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    const handledSubstrac = (e) => {
        setCounter( counter - 1);
    }

    const handledReset = (e) => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handledAdd }>+1</button>
            <button onClick={ handledReset }>Reset</button>
            <button onClick={ handledSubstrac }>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value: Proptypes.number
}

export default CounterApp;

//rafcp si se escribe este comando se genera 
//todo el componente con proptyps