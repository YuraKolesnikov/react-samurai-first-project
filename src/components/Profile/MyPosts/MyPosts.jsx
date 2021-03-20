import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <ul className={classes.MyPosts}>
      <Post text='Hey, why nobody loves me?' />
      <Post text='Hello World!' />
    </ul>
  )
}

export default MyPosts
