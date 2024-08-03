import NavBar from "../components/navbar/navbar";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Orderlist from "../components/Orderlist/orderlist";

const RecipeDetailScreen =  () => {

    const [item , setitem] = useState({})

    const urlParams = useParams()

    // console.log(urlParams)

    useEffect(()=> {
        fetchEachProduct(urlParams.recipeId)
    },[])

    const fetchEachProduct = async (id) => {
        const res = await axios.get(`https://dummyjson.com/recipes/${id}`)
        // console.log(res)
        setitem(res.data)
    }

return (
    <>
    <NavBar/>
    {
        Object.keys(item).length > 0  && <div>
            <h3>{item.name}</h3>
            <img src={item.image} width={200} height={170} alt={item.name}/><br/>
            <p>Cuisine : {item.cuisine}</p>
            <h4>Ingredients Required to prepare "{item.name}"</h4>
            <Orderlist list={item.ingredients} />
            <h4>Instructions</h4>
            <Orderlist list={item.instructions} />            
        </div>
    }
    </>
);
    
}

export default RecipeDetailScreen