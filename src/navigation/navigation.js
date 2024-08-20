import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../Screens/Home-Screen"

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