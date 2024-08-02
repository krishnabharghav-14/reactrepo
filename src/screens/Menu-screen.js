import { useEffect, useState } from "react";
import NavBar from "../components/navbar/navbar";
import axios from 'axios'
import Orderlist from "../components/Orderlist/orderlist";


const MenuScreen = () => {



    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => fetchHandler, [])

    const fetchHandler = async () => {
        const response = await axios.get('https://dummyjson.com/recipes')
        const revampData = response.data.recipes.map(eachRecipe => {
            return { id: eachRecipe.id, name: eachRecipe.name }
        })
        // console.log(revampData)
        setOptions(revampData)
    }


    const detailsHandler = async (event) => {
        console.log(event.target.value)
        const response = await axios.get(`https://dummyjson.com/recipes/${event.target.value}`)
        // console.log(response.data)
        setSelected(response.data)
    }

    return (
        <>
            <NavBar />
            <h3>Welcome to Main Screen </h3>


            {
                options.length > 0 ?
                    <select onChange={detailsHandler}>
                        {
                            options.map(each => {
                                return (
                                    <option value={each.id} key={each.id}>{each.name}</option>
                                );
                            })
                        }
                    </select> :
                    <h4>Please Wait the items are loading</h4>
            }
            {
                Object.keys(selected).length > 0 && <div>
                    <table className="table">
                    <tbody>
                        <tr>
                        <td>Name</td>
                                <td>Cuisine</td>
                                <td>
                                    Image
                                </td>
                                <td>Rating</td> 
                                <td>Perp-Time</td>
                                <td>Ingredients</td>
                                <td>Instructions</td>
                        </tr>
                            <tr key={selected.id}>
                                <td>{selected.name}</td>
                                <td>{selected.cuisine}</td>
                                <td>
                                    <img src={selected.image} width={100} height={100} alt="User" />
                                </td>
                                <td>{selected.rating}</td>
                                <td>{selected.prepTimeMinutes}</td>
                                <td><Orderlist list={selected.ingredients}/></td>
                                <td><Orderlist list={selected.instructions}/></td>
                            </tr>
                    </tbody>
                </table>
                </div>
            }

        </>

    );
}


export default MenuScreen