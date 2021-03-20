import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <div className={classes.MyPosts}>
        <h3>My posts</h3>
        <textarea></textarea>
        <button>Send</button>
        <button>Delete</button>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
