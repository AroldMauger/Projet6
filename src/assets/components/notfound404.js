import "./notfound404.css";
import Navigation from '../layout/navigation.js'
import { Link } from "react-router-dom";


function NotFound404() {
  return (
    <div>
        <Navigation/>,
        <div className="error">
            <div className="error_number">404</div>
            <div className="error_text">Oups! La page que vous demandez n&apos;existe pas.</div>
            <Link to="/">
              <div className="error_back">Retourner sur la page d&apos;accueil</div>
            </Link>
        </div>
       
    </div>
  )
}

export default NotFound404