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



// import { useContext, useEffect, useState } from 'react';
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import './recipecard.css';
// import { DataContext, RecipeContext } from '../../navigation/navigation';

// const CustomCard = ({ search, fetchedList }) => {
//     console.log(fetchedList)
//     const [list, setList] = useState([]);
//     const [filteredList, setFilteredList] = useState(fetchedList);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate()
//     useEffect(()=> {
//         fetchRecipe()
//     }, [ search, ])

//     const { darkMode } = useContext(DataContext);

//     const { addFavourite } = useContext(RecipeContext)


//     const addFoodHandler = (eachFood) => {
//         addFavourite(eachFood)
//         const updatedList = filteredList.map((food) =>
//             food.id === eachFood.id ? { ...food, existsInFavourites: true } : food
//         );
//         setFilteredList(updatedList);
//     }

//     const gotoFavouriteHandler = () => {
//         navigate('Favourite')
//     }


//     const fetchRecipe = async ()=> {
//         try{
//             const {status, data} = await axios.get(`https://dummyjson.com/recipes/search?q=${search}`)
//             if(status==200){
//                 const newData = data.recipes.map((each)=> {
//                     return { ...each, existsInFavourites: false }
//                 })
//                 setFilteredList(data.recipes)             
//             }
//         }catch(err){

//         }
//     }

    

    


//     return (
//         <>
//            {
//             filteredList && filteredList.length>0 ?
//             <div className='flex'>
//                     {filteredList.map((eachData) => (
//                         <div className={darkMode ? "card text-white bg-dark mb-3" : "card text-dark bg-light mb-3"} style={{ width: "18rem" }} key={eachData.id}>
//                             <img src={eachData.image} className="card-img-top" alt={eachData.name} />
//                             <div className="card-body">
//                                 <h5 className="card-title">{eachData.name}</h5>
//                                 <button><NavLink to={`/recipe/${eachData.cuisine}/${eachData.id}`} style={{ color: 'white' , textDecoration:'none'}}>See more</NavLink></button>
//                                 <div>
//                                 {
//                                     eachData.existsInFavourites ?
//                                     <button onClick={gotoFavouriteHandler} >Go To Favourites</button> :
//                                     <button onClick={()=> addFoodHandler(eachData)}>Add to favourite</button>
//                                 }
                                    
//                                 </div>
//                                 {eachData.tags.map((eachTag) => (
//                                     <p className="card-text" key={eachTag}>#{eachTag}</p>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>:
//                 fetchedList && fetchedList.length>0 &&
//                 <div className='flex'>
//                         {fetchedList.map((eachData) => (
//                             <div className={darkMode ? "card text-white bg-dark mb-3" : "card text-dark bg-light mb-3"} style={{ width: "18rem" }} key={eachData.id}>
//                                 <img src={eachData.image} className="card-img-top" alt={eachData.name} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{eachData.name}</h5>
//                                     <button><NavLink to={`/recipe/${eachData.cuisine}/${eachData.id}`} style={{ color: 'white' , textDecoration:'none'}}>See more</NavLink></button>
//                                     <div>
//                                     {
//                                         eachData.existsInFavourites ?
//                                         <button onClick={gotoFavouriteHandler} >Go To Favourites</button> :
//                                         <button onClick={()=> addFoodHandler(eachData)}>Add to favourite</button>
//                                     }
                                        
//                                     </div>
//                                     {eachData.tags.map((eachTag) => (
//                                         <p className="card-text" key={eachTag}>#{eachTag}</p>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//            }
//         </>
//     );
// };

// export default CustomCard;















import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import './recipecard.css';
import { DataContext, RecipeContext } from '../../navigation/navigation';

const CustomCard = ({ search }) => {
    const { recipeList } = useContext(RecipeContext)
    console.log(recipeList)
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState(recipeList);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    useEffect(()=> {
        fetchRecipe()
    }, [ search, ])

    const { darkMode } = useContext(DataContext);

    const { addFavourite } = useContext(RecipeContext)

    const addFoodHandler = (eachFood) => {
        addFavourite(eachFood)
        const updatedList = filteredList.map((food) =>
            food.id === eachFood.id ? { ...food, existsInFavourites: true } : food
        );
        setFilteredList(updatedList);
    }

    const gotoFavouriteHandler = () => {
        navigate('Favourite')
    }

    const fetchRecipe = async ()=> {
        try{
            const {status, data} = await axios.get(`https://dummyjson.com/recipes/search?q=${search}`)
            if(status==200){
                const newData = data.recipes.map((each)=> {
                    if(recipeList.find(eachData=> each.id==eachData.id && eachData.existsInFavourites==true)){
                        return { ...each, existsInFavourites: true }
                    }
                    else{
                        return { ...each, existsInFavourites: false }
                    }
                })
                
                setFilteredList(newData); // Update filteredList with newData
            }
        }catch(err){
            setError(err);
        }
    }

    return (
        <>
           {
            filteredList && filteredList.length > 0 ?
            <div className='flex'>
                    {filteredList.map((eachData) => (
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
                </div> :
                recipeList && recipeList.length > 0 &&
                <div className='flex'>
                        {recipeList.map((eachData) => (
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

