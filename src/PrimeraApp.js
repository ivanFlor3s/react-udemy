import React from "react"
import PropTypes from 'prop-types'

const saludo = 'Hola como estas?'
const PrimeraApp = ({nombre}) => {
    return (<>
                <h1> { `${nombre}, ${saludo}`}</h1>
                <p>Mi primera aplicacion </p>
            </>)
}

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default PrimeraApp;