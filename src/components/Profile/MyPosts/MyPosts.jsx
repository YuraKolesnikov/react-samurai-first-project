import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts }) => {
  const postsList = posts.map(p => <Post text={p.text} />)
  return (
    <ul className={classes.MyPosts}>
      { postsList }
    </ul>
  )
}

export default MyPosts
