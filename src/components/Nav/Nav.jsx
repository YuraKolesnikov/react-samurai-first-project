import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <NavLink
        activeClassName={classes.active}
        className={classes.item}
        to="/profile">
        Profile
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.item}
        to="/dialogs">
        Dialogs
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.item}
        to="/news">
        News
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.item}
        to="/music">
        Music
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.item}
        to="/settings">
        Settings
      </NavLink>
    </nav>
  )
}

export default Nav
