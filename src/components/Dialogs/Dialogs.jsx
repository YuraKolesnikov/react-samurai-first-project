import React from 'react'
import classes from './Dialogs.module.css'
import UsersList from './UsersList'
import MessageList from './MessageList'

const Dialogs = ({ users, messages }) => {
  return (
    <div className={classes.Dialogs}>
      <UsersList users={users} />
      <MessageList messages={messages} />
    </div>
  )
}

export default Dialogs
