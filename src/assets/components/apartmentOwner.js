import "./apartmentOwner.css";
import PropTypes, { any } from 'prop-types';
ApartmentOwner.propTypes = {
    location: PropTypes.string,
    flat : any,
  }; 

function ApartmentOwner(props) {

    const flat = props.flat
    const name = flat.host.name;
    const [firstName, lastName] = name.split(" ")


  return (
            <div className="owner_details">
                <h3>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
                <div className="photo_owner">
                    <img src={flat.host.picture} alt={"propriétaire de l'appartement"}/>
                </div>
            </div>  
        )
}

export default ApartmentOwner