import React from 'react'


const Country = ({country}) => {
    //const country = props.country
    console.log(country)
    return (
        <div>
            <h1>name: {country.name}</h1>
            {console.log(country.name)}
            capital {country.capital}
            population: {country.population}
        </div>
    )
}

export default Country