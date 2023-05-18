import "./navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
        <div className="navigation_logo">
            <NavLink to="/">
                <img src="logo.png" alt="Logo de Kasa"/>
            </NavLink>
        </div>
        <NavLink to="/">
            <div className="navigation_text">Accueil</div>
        </NavLink>
        <NavLink to="/about">
            <div className="navigation_text">A propos</div>
        </NavLink>

    </nav>
  )
}

export default Navigation