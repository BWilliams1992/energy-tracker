import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div> 
    <h1>Energy Tracker</h1>
    <NavLink to="/">Dashboard</NavLink>
    <NavLink to="/settings">Settings</NavLink>
  </div>
)

export default Header