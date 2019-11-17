import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import StudyNow from './StudyNow'

function Decks () {
  let array
  const [selectDeck, setSelectedDeck] = useState('')
  const [decks, setDecks] = useState([])
  useEffect(() => {
    async function getDataFromDb () {
      let data = await fetch('http://localhost:3000/cards')
      data = await data.json()
      setDecks(data)
    }
    getDataFromDb()
  }, []);

  (function a () {
    array = decks.map(item => item.deck)
    array = Array.from(new Set(array))
  }())

  function handleStudy (e) {
    setSelectedDeck(e.target.innerText)
  }

  return (
    <Router>
      <div className='decks'>
        <h1 className='decks-heading'>Decks</h1>
        <ul>
          {array.map(item => {
            return (
              <li key={Date.now()}>
                <Link to='study' onClick={(e) => handleStudy(e)}> {item.toUpperCase()}</Link>
              </li>
            )
          })}
        </ul>
        <Route exact path='/study'>
          <StudyNow props={selectDeck} />
        </Route>
      </div>
    </Router>
  )
}

export default Decks
