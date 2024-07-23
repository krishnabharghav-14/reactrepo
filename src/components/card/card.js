import { PureComponent } from "react";  
import './card.css'

class Customcard extends PureComponent{
    state = {
        content : [],
        loader : true,
        error : false,
    }

    componentDidMount(){
        this.chakan();
    }

    chakan = async () =>{
        // data
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();


        // img(url)
        let result = await fetch("https://fakestoreapi.com/products");
        let img = await result.json();

        for(let i=0 ; i<data.length ; i++){
            data[i]["image"] = img[i].image;
        }
        console.log(data);


        this.setState({
            content : data,
            loader : false,
        })

    }

    

    render(){
        return (
            <div className="flex">
                {
                    this.state.loader ?
                     <h1>Please Wait...</h1>:
                     <>
                     {
                        this.state.content.map((each) => {
                            return (
                                <div key={each.id} className="card" >
                                <img src={each.image} height={100} width={100}/>
                                <h3>{each.name}</h3>
                                <h4>{each.email}</h4>
                                </div>
                            );
                        })
                     }
                     </>
                }
            </div>
        );
    }
}

export default Customcard;