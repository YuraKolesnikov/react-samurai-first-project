import React from 'react'
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <a className={`${classes.item} ${classes.active}`} href="#">Profile</a>
      <a className={classes.item} href="#">Dialogs</a>
      <a className={classes.item} href="#">News</a>
      <a className={classes.item} href="#">Music</a>
      <a className={classes.item} href="#">Settings</a>
    </nav>
  )
}

export default Nav
