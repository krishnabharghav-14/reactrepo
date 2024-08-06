import { useContext } from 'react'
import NavBar from '../components/navbar/navbar';
import { DataContext, RecipeContext } from '../navigation/navigation';


const FavouriteRecipe = () => {

    const { favDish, removeFavourite } = useContext(RecipeContext)
    const { darkMode } = useContext(DataContext)
    console.log(favDish)


    const removeHandler = (eachFood) => {
        removeFavourite(eachFood)

    }


    return (
        <>
        <NavBar/>

        <h3>Welcome to Favvv page</h3>

        {
            favDish.length>0 ?
            <div className='flex'>
            {
                favDish.map((each)=> {
                    return(
                        <div className={darkMode ? "card text-white bg-dark mb-3" : "card text-dark bg-light mb-3"} style={{ width: "18rem" }} key={each.id}>
                            <img src={each.image} className="card-img-top" alt={each.name} />
                            <div className="card-body">
                                <h5 className="card-title">{each.name}</h5>
                                <button onClick={()=>removeHandler(each)} >Remove from Fav</button>
                                {each.tags.map((eachTag) => (
                                    <p className="card-text" key={eachTag}>#{eachTag}</p>
                                ))}
                            </div>
                        </div>
                    );
                })
            }
            </div>
            :
            <h4>No Dishes in favourites</h4>
        }
        </>
    );

}

export default FavouriteRecipe