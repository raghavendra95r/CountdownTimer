import React from 'react';
import './input.css';


const Input = ({getInput, value}) => {
    return(
        <input className="rounded .shadow-5"  type="date"  onChange={getInput} value={value}/> 
    )
}
export default Input;