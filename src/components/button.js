import React from 'react';
export const Button = (props)=>{
    console.log('Button render');
    return (<button onClick={props.plusFn} className='btn btn-primary'>+</button>)
}