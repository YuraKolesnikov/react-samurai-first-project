import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ posts, createPost, newMessage }) => {
  const submit = (e) => {
    e.preventDefault()
    const newPost = {
      id: Math.floor(Math.random() * 10000000 - 1),
      text: textarea.current.value
    }

    createPost(newPost)
  }

  const handleChange = e => console.log(e.target.value)

  const textarea = React.createRef()

  return (
    <div>
      <ProfileInfo />
      <div className={classes.MyPosts}>
        <h3>My posts</h3>
        <form action="/" onSubmit={submit}>
          <textarea
            onChange={handleChange}
            ref={textarea}
            value={newMessage} />
          <button>Send</button>
        </form>
        <button>Delete</button>
      </div>
      <MyPosts posts={posts} />
    </div>
  )
}

export default Profile
