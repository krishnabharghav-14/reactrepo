import { useContext, useState } from "react";
import NavBar from "../components/navbar/navbar";
import CustomCard from "../components/table/recipecard";
import { DataContext } from "../navigation/navigation";


const MainScreen = () => {

    const { userName } = useContext(DataContext);
    // console.log(userName)
    const [searched, setSearched] = useState("")


    const changeHandler = (event) => {
        const newSearch = event.target.value
        setSearched(newSearch)
    }


    return (
        <>
            <NavBar />
            <div>
            <h3>Hello, {userName} </h3>
            <input 
            placeholder="Search" 
            value={searched}
            onChange={changeHandler} />
            </div>
            <CustomCard search={searched} />

        </>

    );
}

export default MainScreen