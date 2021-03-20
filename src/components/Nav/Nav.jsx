import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
  const links = [
    { to: '/profile', label: 'Profile' },
    { to: '/dialogs', label: 'Dialogs' },
    { to: '/news', label: 'News' },
    { to: '/music', label: 'Music' },
    { to: '/settings', label: 'Settings' }
  ]
  return (
    <nav className={classes.Nav}>
      {
        links.map(link => (
          <NavLink
            to={link.to}
            className={classes.item}
            activeClassName={classes.active}>
            { link.label }
          </NavLink>
        ))
      }
    </nav>
  )
}

export default Nav
