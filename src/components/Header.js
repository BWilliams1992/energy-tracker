import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div className="content-container"> 
    <h1 className="title">Energy Tracker</h1>
    <div className="nav-bar">
      <NavLink className="nav-item" to="/">Dashboard</NavLink>
      <NavLink className="nav-item" to="/settings">Settings</NavLink>
    </div>
  </div>
)

export default Header