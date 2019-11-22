import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import AddCard from './Addcard'
import Decks from './Decks'
import NavBar from './NavBar'
// import StudyNow from './StudyNow'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/add' component={AddCard} />
        <Route exact path='/decks' component={Decks} />
        {/* <Route exact path='/decks/:id' component={StudyNow} /> */}
      </Switch>
    </Router>
  )
}

export default App
