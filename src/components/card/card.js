import { Component } from 'react'
import axios from 'axios'

class Customcard extends Component{



    state = {
        content : [],
        loader : true,
        error : false
    }

    Ehandler =async () => {

        try{
            let response = await axios.get("https://restcountries.com/v3.1/all").then(res => res)
        // console.log(response.data[0].name.common)

        if(response.status === 200){
            this.setState({
                content : response.data,
                loader : false
            })
        }
        }catch(err){
            this.setState({
                error : true,
                loader : false
            })
        }
    }

    componentDidMount() {
        this.Ehandler()
    }

    render(){

        return(
            <>
            <h2>country</h2>
            {
                this.state.loader ?
                <>
                <h1>Please wait...</h1>
                {/* <button onClick={this.Ehandler}>Click me</button> */}
                </>:
                this.state.content.map((each) => <h1>{each.name.common}</h1>)
            }
            </>
        );
    }
}

export default Customcard