import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed
