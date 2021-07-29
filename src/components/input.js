import React from 'react';
import './input.css';


const Input = ({ entereddate, value}) => {
    return(
        <input className="rounded .shadow-5"  type="date"  onChange={ entereddate} value={value}/> 
    )
}
export default Input;