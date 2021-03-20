import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const UsersList = props => {
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

  const usersList = props.users.map(u => <Name key={u.id} id={u.id} name={u.name} />)

  return (
    <div className={classes.Names}>
      { usersList }
    </div>
  )
}

export default UsersList
