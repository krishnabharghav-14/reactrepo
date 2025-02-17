import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogScreen from '../screens/blog-screen';
import MainScreen from '../screens/Main-screen';
import MenuScreen from '../screens/Menu-screen';
import Location from '../screens/Location-screen';
import LoginScreen from '../screens/Login-screen';
import RecipeDetailScreen from '../screens/RecipeDetail-screen';
import { createContext, useEffect, useState } from 'react';
import SettingScreen from '../setting-screen';
import axios from 'axios'
import FavouriteRecipe from '../screens/FavouriteRecipe-screen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext()
export const RecipeContext = createContext()

const NavigationStack = () => {

    const [userName, setUserName] = useState("Bhargav");
    const [darkMode, setDarkMode] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [favDish, setFavDish] = useState([])

    useEffect(() => {
        fetchHandler();
    }, []);


    const fetchHandler = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/recipes");
            const list = res.data.recipes
            const newlist = list.map((EachData)=> {
                return { ...EachData, existsInFavourites: false }
            })
            console.log(list)
            setRecipeList(newlist);
        } catch (err) {
            console.error("error " + err);
        }
    };


    const addFavourite = (newDish) => {

        const recipeExists = favDish.find((eachFood)=> eachFood.id==newDish.id)

        // console.log(recipeList)
        // console.log(newDish)
        const newRecipeList = recipeList.map(eachRecipe=>{
            if(eachRecipe.id==newDish.id){
                console.log()
                return { ...eachRecipe, existsInFavourites: true }
            }
            else{
                return eachRecipe
            }
        })

        setRecipeList(newRecipeList)

        if(recipeExists){
            toast.error("Recipe already exists in favourites", {
                position: "top-right"
              });
            // toast("Recipe already exists in favourites")
            // alert("Recipe already exists in favourites")            
        }else{
            toast.success("Added to Favourites !", {
                position: "top-right"
              });
            setFavDish([...favDish,newDish])
        }
    }

    const removeFavourite = (removedDish) => {

        const newRecipeList = recipeList.map(eachRecipe=>{
            if(eachRecipe.id==removedDish.id){
                return { ...eachRecipe, existsInFavourites: false }
            }
            else{
                return eachRecipe
            }
        })

        setRecipeList(newRecipeList)

        const newFavouriteList = favDish.filter((each) => each.id!=removedDish.id)
        setFavDish(newFavouriteList)

    }

    const changeUserName = (newName) => {
        setUserName(newName);
    }

    const changeDarkMode = (newMode) => {
        setDarkMode(newMode)
    }


    return (
        <RecipeContext.Provider value={{
            recipeList: recipeList,
            favDish: favDish,
            addFavourite: addFavourite,
            removeFavourite: removeFavourite,
        }} >
            <BrowserRouter>
                <DataContext.Provider value={{
                    userName: userName,
                    darkMode: darkMode,
                    changeUserName,
                    changeDarkMode,
                }}>
                    <Routes>
                        <Route path='/' element={<MainScreen />} />
                        <Route path='/Menu' element={<MenuScreen />} />
                        <Route path='/Location' element={<Location />} />
                        <Route path='/Blog' element={<BlogScreen />} />
                        <Route path='/Login' element={<LoginScreen />} />
                        <Route path='/Favourite' element={<FavouriteRecipe />} />
                        <Route path='/Setting' element={<SettingScreen />} />
                        <Route path='/Recipe' element={<RecipeDetailScreen />} />


                        {/* dynamic Routes */}
                        <Route path='/recipe/:cuisine/:recipeId' element={<RecipeDetailScreen/>} />

                    </Routes >
                </DataContext.Provider >
            </BrowserRouter >
            <ToastContainer />
        </RecipeContext.Provider >
    );
}

export default NavigationStack