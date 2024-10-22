

import './Country.css';
import { useState } from 'react';
// destruct here the handle function
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags,area,population,cca3} = country;

    const [visited, setVisited]= useState(false)
const handleVisited =() =>{
    setVisited(!visited);
    // setVisited(true)
}

const passWithParams = () =>{handleVisitedCountries(country)}
    return (
        <div className={`'country' ${visited ? 'visited' : 'not-visited' } `}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Name: {name.common}</h3>
            <div className='flag'>
                <img src={flags.png} alt="" />
            </div>
            <p>Area: {area}</p>
<p>Population:{population}</p>
<p><small>Code: {cca3}</small></p>
<button onClick={passWithParams}>Mark As Visited</button><br /><br />
<button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
{visited ? ' I have visited this country' : ' I want to visit this country'}


        </div>
    );
};

export default Country;