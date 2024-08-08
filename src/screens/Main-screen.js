import { useContext, useState } from "react";
import NavBar from "../components/navbar/navbar";
import { DataContext, RecipeContext } from "../navigation/navigation";
import CustomCard from "../components/table/recipecard";

const MainScreen = () => {

    const { userName } = useContext(DataContext)
    const { recipeList } = useContext(RecipeContext)
    const [searched, setSearched] = useState("")
    // console.log(recipeList)

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

            <CustomCard fetchedList={recipeList} search={searched} />


        </>
    );


}

export default MainScreen