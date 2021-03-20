import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <img src="https://cf.bstatic.com/images/hotel/max1024x768/167/167144829.jpg" alt=""/>
      <div className="Description"></div>
      <div className="MyPosts">
        <h4>My posts</h4>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send</button>
        <button>Delete</button>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
