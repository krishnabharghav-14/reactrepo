import { Component } from 'react'


class Counter extends Component{
    state = {
        count : 0,
    }
    increment (a){

        this.setState(
            {  count : this.state.count + a }
        )
    }
    decrement (a){

        if(this.state.count>0){
            this.setState(
                {  count : this.state.count - a }
            )
        }
    }

    render (){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={() => this.increment(1)}>inc</button>
            
            <button onClick={() => this.decrement(1)}>dec</button>
            </>
        );
    }
}

export default Counter;