import React, {useState, useEffect} from 'react'
import NewPlant from "./NewPlant";
import PlantList from "./PlantList";
import { Link } from "react-router-dom";

const Garden = () => {
    const [plants, setPlants] = useState([]);
    useEffect( () => {
        const fetchLocation = async() => {
        await fetch("http://localhost:8080/api/plants")
        .then( (res) => res.json())
        .then( (plants) => {
            setPlants(plants);
            console.log(plants);
        })
        };
        fetchLocation();
    }, [] );

    if(!plants.length) return <div>Loading...</div>

    return (
        <>
        <div>
        <PlantList plants={plants}/>
        </div>
        <div>
        <Link to="/garden/newplant"> <NewPlant/> </Link>
        </div>
        </>
    )
}

export default Garden