import React from "react";

const saludo = 'Hola como estas?'
const PrimeraApp = ({nombre='Vegeta'}) => {
    return (<>
                <h1> { `${nombre}, ${saludo}`}</h1>
                <p>Mi primera aplicacion </p>
            </>)
}

export default PrimeraApp;