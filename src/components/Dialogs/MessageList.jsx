import classes from './Dialogs.module.css'

const MessageList = props => {
  const Message = props => {
    return (
      <div className={classes.Message}>{ props.message }</div>
    )
  }

  const msgList = props.messages.map(m => <Message key={m.id} message={m.text} />)

  return (
    <div className={classes.MessageList}>
      { msgList }
    </div>
  )
}

export default MessageList
