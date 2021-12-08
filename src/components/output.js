import React from 'react';
export const Output = (props)=>{
    console.log('Output render');
    return(<h2>Result is {props.result}</h2>)
}