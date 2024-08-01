import { NavLink } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {

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
                </ul>
            </div>
        </nav>

    );
}


export default NavBar