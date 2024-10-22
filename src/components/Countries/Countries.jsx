import './Countries.css'
import React, { useEffect, useState } from 'react';
import Country from '../Country';
const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    } ,[])

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = country =>{
        console.log('add this to your visited country')
const newVisitedCountries = [...visitedCountries, country]
setVisitedCountries(newVisitedCountries)
    }


    return (
        <div >
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
{
visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
}                </ul>
            </div>
          <div className='countries'>
          {
                countries.map(country=> <Country 
             key={country.cca3} 
               country={country}
                  //  triggered here this function
handleVisitedCountries = {handleVisitedCountries} 
></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;