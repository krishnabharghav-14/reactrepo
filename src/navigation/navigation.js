import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogScreen from '../screens/blog-screen';
import MainScreen from '../screens/Main-screen';
import MenuScreen from '../screens/Menu-screen';
import Location from '../screens/Location-screen';
import LoginScreen from '../screens/Login-screen';
import JokeScreen from '../screens/Joke-screen';
import RecipeDetailScreen from '../screens/RecipeDetail-screen';
import { createContext, useState } from 'react';
import SettingScreen from '../setting-screen';

export const DataContext = createContext()

const NavigationStack = () => {

    const [userName, setUserName] = useState("Bhargav");
    const [darkMode, setDarkMode] = useState(false);

    const changeUserName = (newName) => {
        setUserName(newName);
    }

    const changeDarkMode = (newMode) => {
        setDarkMode(newMode)
    }


    return (
        <BrowserRouter>
        <DataContext.Provider value={{
            userName : userName,
            darkMode : darkMode,
            changeUserName,
            changeDarkMode,
        }}>
        <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/Menu' element={<MenuScreen />} />
            <Route path='/Location' element={<Location />} />
            <Route path='/Blog' element={<BlogScreen />} />
            <Route path='/Login' element={<LoginScreen/>}/>
            <Route path='/Joke' element={<JokeScreen/>}/>
            <Route path='/Setting' element={<SettingScreen/>}/>


            {/* dynamic Routes */}
            <Route path='/recipe/:cusine/:recipeId' element={<RecipeDetailScreen/>} />

        </Routes>
        </DataContext.Provider>
        </BrowserRouter>
    );
}

export default NavigationStack