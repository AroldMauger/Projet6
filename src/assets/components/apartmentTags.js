
import "./apartmentTags.css";
import PropTypes from 'prop-types';
ApartmentTags.propTypes = {
    flat : PropTypes.object.isRequired,
  }; 

function ApartmentTags(props) {

  const flat = props.flat

  return (
        <div className="apartment_tags">
            {flat.tags.map((tag) => (<span key={tag} className="apartment_tag">{tag}</span>))}
        </div>  
        )
}

export default ApartmentTags