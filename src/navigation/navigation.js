import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogScreen from '../screens/blog-screen';
import MainScreen from '../screens/Main-screen';
import MenuScreen from '../screens/Menu-screen';
import Location from '../screens/Location-screen';
import LoginScreen from '../screens/Login-screen';

const NavigationStack = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/Menu' element={<MenuScreen />} />
            <Route path='/Location' element={<Location />} />
            <Route path='/Blog' element={<BlogScreen />} />
            <Route path='/Login' element={<LoginScreen/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default NavigationStack