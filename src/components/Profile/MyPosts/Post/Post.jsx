import React from 'react'
import classes from './Post.module.css'

const Post = props => {
  return (
    <li className="item">{ props.text }</li>
  )
}

export default Post
