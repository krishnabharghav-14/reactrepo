import { NavLink } from "react-router-dom";
import "./navbar.css"
import { RecipeContext } from "../../navigation/navigation";
import { useContext } from "react";

const NavBar = () => {

    const {favDish} = useContext(RecipeContext)

    const Linkstyle  = {textDecoration:"none", margin : 10}


    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} style={Linkstyle} >
                            Main
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Menu'} style={Linkstyle} >
                            Menu
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Location'} style={Linkstyle} >
                            Location
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Blog'} style={Linkstyle} >
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Login'} style={Linkstyle} >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/recipe/:cuisine/:recipeId'} style={Linkstyle} >
                            Recipe Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Favourite'} style={Linkstyle} >
                            Favourites {favDish.length}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Setting'} style={Linkstyle} >
                            Setting
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}


export default NavBar