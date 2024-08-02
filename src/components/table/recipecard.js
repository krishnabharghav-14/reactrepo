import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './recipecard.css';

const CustomCard = () => {
    const [loader, setLoader] = useState(true);
    const [list, updateList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHandler();
    }, []);

    const fetchHandler = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/recipes");
            const recipeList = res.data.recipes.map((eachRecipe) => {
                return { id : eachRecipe.id, image : eachRecipe.image, tags : eachRecipe.tags}
            });
            updateList(recipeList);
            setLoader(false);
        } catch (err) {
            console.error("error " + err);
            setError("Failed to fetch recipes. Please try again later.");
            setLoader(false);
        }
    };


    const selectHandler = async (targetRecipe) => {

    }

    return (
        <>
            {loader ? (
                <h3>Please Wait...</h3>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <div className='flex'>
                    {list.map((eachData) => (
                        <div className="card" style={{ width: "18rem" }} key={eachData.id}>
                            <img src={eachData.image} className="card-img-top" alt={eachData.name} />
                            <div className="card-body">
                                <NavLink path={"/Menu"}><button onClick={() => selectHandler(eachData.id)} >Select</button></NavLink>
                                {eachData.tags.map((eachTag) => (
                                    <p className="card-text" key={eachTag}>#{eachTag}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default CustomCard;
