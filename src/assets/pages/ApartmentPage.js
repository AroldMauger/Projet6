
import "./ApartmentPage.css"
import Collapse from "../components/collapse.js"
import ApartmentCarrousel from "../components/apartmentCarrousel.js"
import ApartmentTitle from "../components/apartmentTitle.js"
import ApartmentLocation from "../components/apartmentLocation.js"
import ApartmentTags from "../components/apartmentTags.js"
import ApartmentOwner from "../components/apartmentOwner.js"
import ApartmentRating from "../components/apartmentRating.js"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"



function ApartmentPage() {
  const location = useLocation();
    const [selectedApartment, setSelectedApartment] = useState(null);
  useEffect(fetchApartmentData);

  function fetchApartmentData () {
    fetch ("data.json")
    .then ((response) => response.json())
    .then((apartments) => {
        const apartment = apartments.find((apartment) => apartment.id === location.state.apartmentId);
        setSelectedApartment(apartment);
    })
    .catch(console.error)
}

if (selectedApartment == null) return <div>Loading...</div>;

    return (
    <div className="apartment_page">
        <ApartmentCarrousel pictures={selectedApartment.pictures}/>
        <div className="apartment_header">
            <div className="apartment_banner_left">
                <ApartmentTitle title={selectedApartment.title}/>
                <ApartmentLocation location={selectedApartment.location}/>
                <ApartmentTags flat={selectedApartment}/>
            </div>
            <div className="apartment_owner">
                <ApartmentOwner flat={selectedApartment}/>
                <ApartmentRating flat={selectedApartment}/>
            </div>
        </div>
        <div className="apartment_description_area">
            <Collapse title="Description" content={selectedApartment.description} />
            <Collapse title="Équipements" content={selectedApartment.equipments.map((equipement, index) => 
                (<li key={index}> {equipement} </li>))}/>
        </div>
            
    </div>
  )
}

export default ApartmentPage