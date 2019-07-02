import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  const [displayRows, setDisplayRows] = useState(persons)


  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    //check if person is in list

    if (isDuplicate(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }

    else {
      setPersons(persons.concat([{ name: newName, number: newNumber }]))
      console.log("persons: ", persons)

    }
  }

  const setQuery = (query) => {
    let p = persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
    setDisplayRows(p)
    console.log(displayRows)
  }



  const isDuplicate = (name) => {
    let p = persons.filter(person => person.name === name)
    console.log(p)
    return p.length > 0
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("event number", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFinderChange = (event) => {
    console.log("query", event.target.value)
    setQuery(event.target.value)
    setFindName(event.target.value)
  }


  const rows = () => displayRows.map(person => <li key={person.name}>{person.name} {person.number} </li>)






  return (
    <div>
      <form onSubmit={addName}>
        Filter shown with: <input value={findName} onChange={handleFinderChange} />
      </form>

      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>

    </div>
  )
}



export default App