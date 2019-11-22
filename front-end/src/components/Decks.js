import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import StudyNow from './StudyNow'

function Decks () {
  let array
  const [curTime, setCurTime] = useState('')
  const [display, setDisplay] = useState(true)
  const [decks, setDecks] = useState([])
  const [studyDeck, setStudy] = useState('')

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

  function handleTotalDeck (e) {
    const deck = e.target.innerText.toLowerCase()
    setCurTime(Date.now())
    setStudy(decks.filter(item => item.deck === deck))
    setDisplay(false)
  }

  return (
    <Router>
      <div className='decks'>
        {display &&
          <div>
            <h1 className='decks-heading'>Decks</h1>
            <ul>
              {array.map(item => {
                return (
                  <li key={Date.now()}>
                    <Link to={`/decks/${item.toLowerCase()}`} onClick={(e) => handleTotalDeck(e)}> {item.toUpperCase()}</Link>
                  </li>
                )
              })}
            </ul>
          </div>}
        <Route exact path='/decks/:id'>
          <StudyNow props={studyDeck} curTime={curTime} />
        </Route>
      </div>
    </Router>
  )
}

export default Decks
