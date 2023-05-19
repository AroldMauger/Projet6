import "./apartmentLocation.css";
import PropTypes from 'prop-types';
ApartmentLocation.propTypes = {
    location: PropTypes.string.isRequired,
  };

function ApartmentLocation(props) {
  return (
    <h2 className="apartment_page_location">{props.location}</h2>
    )
}

export default ApartmentLocation