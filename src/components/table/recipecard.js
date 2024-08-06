// import { useContext, useEffect, useState } from 'react';
// import { NavLink } from "react-router-dom";
// import axios from 'axios';
// import './recipecard.css';
// import { DataContext } from '../../navigation/navigation';

// const CustomCard = ({ search }) => {
//     const [loader, setLoader] = useState(true);
//     const [list, updateList] = useState([]);
//     const [error, setError] = useState(null);

//     console.log(search)

//     const { darkMode } = useContext(DataContext);

//     useEffect(() => {
//         fetchHandler();
//     }, []);

//     useEffect(()=> {
//         const searchedRecipes = list.filter((each) => {
//             return each.name.toLowerCase().includes(search.toLowerCase())
//         })
//         console.log(search,"effect",searchedRecipes,"recipes")
//         console.log(list)
//         updateList(searchedRecipes)
//     },[search])


//     const fetchHandler = async () => {
//         try {
//             const res = await axios.get("https://dummyjson.com/recipes");
//             const recipeList = res.data.recipes.map((eachRecipe) => {
//                 return {
//                     id: eachRecipe.id,
//                     image: eachRecipe.image,
//                     tags: eachRecipe.tags,
//                     cuisine: eachRecipe.cuisine,
//                     name: eachRecipe.name
//                 }
//             });

//             // const regex = new RegExp(`/${searched}/`)
//             // regex.test(each.name)

            
//             // console.log(recipeList)
//             updateList(recipeList);
//             setLoader(false);
//         } catch (err) {
//             console.error("error " + err);
//             setError("Failed to fetch recipes. Please try again later.");
//             setLoader(false);
//         }
//     };

//     return (
//         <>
//             {loader ? (
//                 <h3>Please Wait...</h3>
//             ) : error ? (
//                 <h3>{error}</h3>
//             ) : (
//                 <div className='flex'>
//                     {list.map((eachData) => (
//                         <div className={darkMode ? "card text-white bg-dark mb-3" : "card text-dark bg-light mb-3"} style={{ width: "18rem" }} key={eachData.id}>
//                             <img src={eachData.image} className="card-img-top" alt={eachData.name} />
//                             <div className="card-body">
//                                 <h5 class="card-title">{eachData.name}</h5>
//                                 <button ><NavLink to={`/recipe/${eachData.cuisine}/${eachData.id}`} style={{ color: 'white' }}>Select</NavLink></button>
//                                 {eachData.tags.map((eachTag) => (
//                                     <p className="card-text" key={eachTag}>#{eachTag}</p>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// };

// export default CustomCard;



import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import './recipecard.css';
import { DataContext, RecipeContext } from '../../navigation/navigation';

const CustomCard = ({ search, fetchedList }) => {
    const [loader, setLoader] = useState(true);
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const { darkMode } = useContext(DataContext);

    const { addFavourite } = useContext(RecipeContext)


    const addFoodHandler = (eachFood) => {
        addFavourite(eachFood)
    }

    const gotoFavouriteHandler = () => {
        navigate('Favourite')
    }

    

    


    return (
        <>
           {
            fetchedList && fetchedList.length>0 &&
            <div className='flex'>
                    {fetchedList.map((eachData) => (
                        <div className={darkMode ? "card text-white bg-dark mb-3" : "card text-dark bg-light mb-3"} style={{ width: "18rem" }} key={eachData.id}>
                            <img src={eachData.image} className="card-img-top" alt={eachData.name} />
                            <div className="card-body">
                                <h5 className="card-title">{eachData.name}</h5>
                                <button><NavLink to={`/recipe/${eachData.cuisine}/${eachData.id}`} style={{ color: 'white' , textDecoration:'none'}}>See more</NavLink></button>
                                <div>
                                {
                                    eachData.existsInFavourites ?
                                    <button onClick={gotoFavouriteHandler} >Go To Favourites</button> :
                                    <button onClick={()=> addFoodHandler(eachData)}>Add to favourite</button>
                                }
                                    
                                </div>
                                {eachData.tags.map((eachTag) => (
                                    <p className="card-text" key={eachTag}>#{eachTag}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
           }
        </>
    );
};

export default CustomCard;
