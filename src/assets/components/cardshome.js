import { useEffect, useState } from "react";
import "./cardshome.css";
import Kasacards from "./kasacards.js"


function CardsHome() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments () {
    fetch("data.json")
    .then((response) => response.json())
    .then((response) => setApartments (response))
    .catch(console.error)
  }

  return (
    <div className="cards">
       {apartments.map ((apartment) => (
       <Kasacards title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id}/>))}
    </div>
  )
}

export default CardsHome