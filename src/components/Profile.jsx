import React from 'react'

const Profile = () => {
  return (
    <div className="Content">
      <div>
        <img src="https://cf.bstatic.com/images/hotel/max1024x768/167/167144829.jpg" alt=""/>
        <div className="Description"></div>
        <div className="MyPosts">
          <h4>My posts</h4>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
        <ul className="Posts">
          <li>Hey, why nobody loves me?</li>
          <li>Hello World!</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
