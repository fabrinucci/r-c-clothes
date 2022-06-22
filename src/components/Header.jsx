import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from '../others/NavLink'

export const Header = () => {
  return (
    <header>
      <Link to='/'><h1>R-C Clothes</h1></Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>HomePage</NavLink>
          </li>
          <li>
            <NavLink to='/search'>SearchPage</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
