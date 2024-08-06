import { useContext } from "react";
import NavBar from "../components/navbar/navbar";
import { DataContext, RecipeContext } from "../navigation/navigation";
import CustomCard from "../components/table/recipecard";

const MainScreen = () => {

    const { userName } = useContext(DataContext)
    const { recipeList } = useContext(RecipeContext)
    // console.log(recipeList)


    return(
        <>
        <NavBar/>
        <h3>Hello, {userName}</h3>

        <CustomCard fetchedList={recipeList} />


        </>
    );

    
}

export default MainScreen