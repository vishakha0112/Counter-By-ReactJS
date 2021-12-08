import React from 'react';
import {Button} from '../components/button';
import {Output} from '../components/output';
import {Title} from '../components/title';
export class Counter extends React.Component {
    constructor(){
        super();
        this.value=0;
        this.state={plusValue:this.value};
    }
    plus(){
        console.log('Inside Plus ',this);
        this.value++;
        this.setState({plusValue:this.value});
        console.log('Plus  called ',this.value);
    }
    render(){
        console.log('Counter render');
    return(
        <div className='container'>
        <Title title="Counter App"/>
        <Button plusFn = {this.plus.bind(this)}/>
        <Output result = {this.state.plusValue}/>
        </div>
    )
    }
}