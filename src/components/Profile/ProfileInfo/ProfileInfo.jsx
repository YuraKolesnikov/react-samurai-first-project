import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={classes.ProfileInfo}>
      <img
        src="https://cf.bstatic.com/images/hotel/max1024x768/167/167144829.jpg" alt=""/>
      <div className={classes.Description}></div>
    </div>
  )
}

export default ProfileInfo
