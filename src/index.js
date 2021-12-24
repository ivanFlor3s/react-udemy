import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./counterApp";

import './styles.css'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={10}/>,divRoot)