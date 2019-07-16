import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from "./components/Country.js"


const url = "https://restcountries.eu/rest/v2/all"


const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get(url)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])


  console.log("countries:",  countries)


  return (
    <div>

      <Country country={ countries[1] } />

    </div>
  )
}


/*

  <div>
      <div>
        <ul>
          {countries.map(c => <li key={c.name}> {c.name} </li>)}
        </ul>
      </div>
      <div>
      
*/




export default App;
