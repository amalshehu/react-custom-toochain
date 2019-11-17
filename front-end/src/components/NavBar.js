import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import logo from '../img/logo.jpeg'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <label className='logo-text'>SpaceRep</label>
          <img src={logo} alt='logo' width='70' height='30' className='logo' />
        </Link>

        <Link role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </Link>
      </div>

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/decks'> Decks</Link>
          <Link className='navbar-item' to='/add'> Add</Link>
          <Link className='navbar-item' to=''> Search</Link>
        </div>

        <div className='navbar-end'>
          <Link className='navbar-item' to=''> Account</Link>
          <Link className='navbar-item' to=''> Log Out</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
