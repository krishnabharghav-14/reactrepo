import { NavLink } from "react-router-dom";

const Navbar = () => {

    const Linkstyle  = {textDecoration:"none", margin : 10}

    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={'/'} style={Linkstyle}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">
          Disabled
        </a>
      </li>
    </ul>
  </div>
</nav>


    );

}

export default Navbar;