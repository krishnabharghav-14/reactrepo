import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/Home-Screen";

const NavigationStack = ()=> {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen/>} ></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack;