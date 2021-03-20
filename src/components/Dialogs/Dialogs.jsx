import React from 'react'
import classes from './Dialogs.module.css'
import UsersList from './UsersList'
import MessageList from './MessageList'

const Dialogs = ({ users, messages, createMessage }) => {
  const submit = e => {
    e.preventDefault()
    const newMessage = {
      id: Math.floor(Math.random() * 1000000 - 1),
      text: textarea.current.value
    }

    createMessage(newMessage)
  }

  const textarea = React.createRef()

  return (
    <div className={classes.Dialogs}>
      <UsersList users={users} />
      <MessageList messages={messages} />
      <form action="/" onSubmit={submit}>
        <textarea ref={textarea}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Dialogs
