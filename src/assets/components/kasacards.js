import "./kasacards.css"
import { Link } from "react-router-dom";
import PropTypes, { any } from 'prop-types';
Kasacards.propTypes = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    imageUrl : any,
  }; 

function Kasacards(props) {
  return (
    <Link 
    to="/apartments" 
    state={{
      apartmentId : props.id
    }}>
    <div className="card_apartment">
      <img src={props.imageUrl} className="image_card_apartment" alt={"aperçu de l'appartement"}/>
      <div className="title_apartment">{props.title}</div>
    </div>
    </Link>

  )
}

export default Kasacards