import { Component } from "react";
import './square.css'

class SquareGenerate extends Component {
    state = {
        boxes : [1,1,1],
    }

    Addsquare = () => {
        const newState = [...this.state.boxes, 1];

        this.setState({
            boxes : newState,
        })
    }

    Change = (targetSquare) => {
        UpadatedBoxes = this.state.boxes.map((each, index) => {
            if(index === targetSquare){
                 
            }
        })
    }

    render() {
        return (
            <>
            <button onClick={() => this.Addsquare()}>Add Square</button>
            {
                this.state.boxes.map((each, index) => <> <div onClick={Change(index)} className={ (index+1) %2 ? "square1" : "square2"}>{index+1}</div> </>)
            }
            </>
        );
    }
}


export default SquareGenerate;