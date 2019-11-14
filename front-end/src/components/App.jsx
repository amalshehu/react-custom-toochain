import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import 'regenerator-runtime/runtime'
import logo from '../img/logo.jpeg'
import Cards from './Addcard'
import Decks from './Decks'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            <label className='logo-text'>SpaceRep</label>
            <img src={logo} alt='logo' width='70' height='30' className='logo' />
          </a>

          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div className='navbar-menu'>
          <div className='navbar-start'>
            <Link className='navbar-item' to='/decks'> Decks</Link>
            <Link className='navbar-item' to='/add'> Add</Link>
            <a className='navbar-item' href=''> Search</a>
          </div>

          <div className='navbar-end'>
            <a className='navbar-item' href=''> Account</a>
            <a className='navbar-item' href=''> Log Out</a>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path='/add'>
          <Cards />
        </Route>
        <Route path='/decks'>
          <Decks />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
