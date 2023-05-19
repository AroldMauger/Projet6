import "./apartmentTitle.css"
import PropTypes from 'prop-types';
ApartmentTitle.propTypes = {
    title : PropTypes.string.isRequired,
  }; 

function ApartmentTitle(props) {
  return (
    <h1 className="apartment_page_title">{props.title}</h1>
    )
}

export default ApartmentTitle