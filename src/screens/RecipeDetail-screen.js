import NavBar from "../components/navbar/navbar";
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Orderlist from "../components/Orderlist/orderlist";
import { RecipeContext } from "../navigation/navigation";

const RecipeDetailScreen = () => {

    const [item, setitem] = useState({})
    const urlParams = useParams()
    const { recipeList, addFavourite } = useContext(RecipeContext)


    useEffect(() => {
        fetchEachProduct(urlParams.recipeId)
    }, [])

    const fetchEachProduct = async (id) => {
        if (id != "") {


            try{
                const res = await axios.get(`https://dummyjson.com/recipes/${id}`)
            console.log(recipeList)
            const selectedRecipe = recipeList.find(each => each.id == res.data.id)
            console.log(selectedRecipe)
            setitem(selectedRecipe)
            }
            catch(err){
                console.log("error",err)
            }
        }
    }


    const addFoodHandler = () => {
        addFavourite(item)
        setitem({ ...item, existsInFavourites: true })
    }


    return (
        <>
            <NavBar />
            {
                Object.keys(item).length > 0 ? <div>
                    <h3>{item.name}</h3>
                    <img src={item.image} width={200} height={170} alt={item.name} /><br />
                    <p>Cuisine : {item.cuisine}</p>
                    <h4>Ingredients Required to prepare "{item.name}"</h4>
                    <Orderlist list={item.ingredients} />
                    <h4>Instructions</h4>
                    <Orderlist list={item.instructions} />
                    {
                        item.existsInFavourites ?
                            <button><NavLink to='/Favourite'
                                style={{ color: 'white', textDecoration: 'none' }}>Go To Favourites</NavLink></button> :
                            <button onClick={addFoodHandler} >Add to Favourites</button>
                    }
                </div> : <h3>No Details</h3>
            }
        </>
    );

}

export default RecipeDetailScreen