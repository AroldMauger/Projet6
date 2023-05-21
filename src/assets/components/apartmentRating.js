import "./apartmentRating.css";
import PropTypes from 'prop-types';
ApartmentRating.propTypes = {
    flat : PropTypes.object.isRequired,
  }; 

function ApartmentRating(props) {

    
  return (
            <div className="apartment_rating">
                {[1, 2, 3, 4, 5].map((num) =>(
                <span key={num} className={props.flat.rating >= num ? "on" : ""}><i className="fa-solid fa-star"></i></span>                
                ))}

             
            </div>  
        )
}

export default ApartmentRating