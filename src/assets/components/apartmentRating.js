import "./apartmentRating.css";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

ApartmentRating.propTypes = {
    flat : PropTypes.object.isRequired,
  }; 

function ApartmentRating(props) {

    
  return (
            <div className="apartment_rating">
                {[1, 2, 3, 4, 5].map((num) =>(
                <span key={num} className={props.flat.rating >= num ? "on" : ""}><FontAwesomeIcon icon={faStar} /></span>                
                ))}

             
            </div>  
        )
}

export default ApartmentRating