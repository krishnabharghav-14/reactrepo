import { Component } from "react";
import Customheading from "../Headings/heading";
import Custombutton from "../button/button";
import Details from "../../data/teamlist";
import Customprogressbar from "../progressbar/progressbar";
import "./card.css"


class Customcard extends Component{

    state = {
        array : Details,
    }

    incrementhandler=(targetteam)=> {
        const Updatedlist = this.state.array.map((each) => {
            if(each.name==targetteam){
                return {...each, cups : each.cups+1}
            }else{
                return {...each}
            }
        }) 

        const newState = Updatedlist;

        this.setState({
            array : newState,
        })
    }

    decrementhandler=(targetteam, wins)=> {
        const Updatedlist = this.state.array.map((each) => {
            if(each.name==targetteam){
                return {...each, cups : each.cups-1}
            }else{
                return {...each}
            }
        })

        this.setState({
            array : Updatedlist,
        })
    }

    percent(cups){
        var p = (cups/17)*100;
        return p;
    }

    render() {
        return(
            <>
            {
                this.state.array.map((each) => {
                    return(
                        <div className='card'>
                        <img src={each.image} style={{width:"300px", height:"300px"}}/>
                        <h3>{each.name}</h3>
                        <button>See more...</button><br/>
                        <Customprogressbar scale={this.percent(each.cups)}/>
                        <br/>
                        <button onClick={() => this.incrementhandler(each.name)}>Increment</button>
                        <button onClick={() => this.decrementhandler(each.name, each.cups)}>Decrement</button><br/><br/>
                        </div>
                    );
                })
            }
            </>
        );
    }
}

export default Customcard;