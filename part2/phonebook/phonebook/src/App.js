import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    //check if person is in list
    if (isDuplicate(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat([{ name: newName }]))
      console.log("persons: ", persons)
      setNewName("")
    }
  }

  const isDuplicate = (name) => {
    let p = persons.filter(person => person.name === name)
    return p.length > 0
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const rows = () => persons.map(person => <li key={person.name}>{person.name}</li>)




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input value={newName} onChange={handleNameChange} />
        <div>          <button type="submit">add</button>
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