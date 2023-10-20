import { useState } from "react";

export function Destiny (){

    const cities = ['Buenos Aires', 'Sydney', 'Praga', 'Boston', 'Tokio'];
    const [city, setCity]= useState('');

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    

    return (
        <div className="App-header">
            <select name="countries" onChange={handleChange}>
                <option value="" selected>Select a City</option>
                {
                    cities.sort().map(city =>(
                        <option key = {city} value={city}>{city.toUpperCase()}</option>
                    ))
                }                
            </select>
            {
                city
                ? <h2> Tu destino es: {city}</h2>
                : null

            }
            
        </div>
    )
}