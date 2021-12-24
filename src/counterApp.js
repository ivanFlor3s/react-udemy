import React, { useState } from "react";
import PropTypes from 'prop-types'



const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const handlerAdd = () => {
        setCounter(counter + 1)
    }
    const handlerSubstract = ()=>{
        setCounter(counter - 1)
    }

    return ( <>
        <h1>Counter App</h1>
        <h2>{counter} </h2>
        <button onClick={handlerAdd}> +1 </button>
        <button onClick={()=>setCounter(value)} >Reset</button>
        <button onClick={handlerSubstract}>-1</button>
    </>)
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
