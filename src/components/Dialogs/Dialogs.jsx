import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Name = props => {
  const path = `/dialogs/${props.id}`

  return (
    <NavLink
      to={path}
      activeClassName={classes.active}>
      { props.name }
    </NavLink>
  )
}

const Message = props => {
  return (
    <div className={classes.Message}>{ props.message }</div>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.Dialogs}>
      <div className={classes.Names}>
        <Name id="1" name="Anton" />
        <Name id="2" name="Dmitri" />
        <Name id="3" name="Sergey" />
      </div>
      <div className={classes.MessageList}>
        <Message message="Hi!" />
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="You're a nigger!" />
      </div>
    </div>
  )
}

export default Dialogs
