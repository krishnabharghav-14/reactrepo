import { NavLink } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link active" >
                            Main
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Menu'} className="nav-link active" >
                            Menu
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Location'} className="nav-link active" >
                            Location
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Blog'} className="nav-link active" >
                            Blog
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link active" >
                            Registration
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>

    );
}


export default NavBar