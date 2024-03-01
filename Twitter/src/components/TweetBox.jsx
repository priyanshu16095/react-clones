import React from 'react'
import './style.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>

          <Avatar alt="Cindy Baker"  src="https://api.dicebear.com/7.x/pixel-art/svg" />
        
          <div className='tweetBox-inputBox'>
            <input type="text" placeholder="What's happening?" />
            <div className="tweetBox-icons">
              <IconButton><ImageOutlinedIcon /></IconButton>
              <IconButton><GifBoxOutlinedIcon /></IconButton>
              <IconButton><FormatListBulletedOutlinedIcon /></IconButton>
              <IconButton><SentimentSatisfiedAltOutlinedIcon /></IconButton>
              <IconButton><PendingActionsOutlinedIcon /></IconButton>
              <IconButton><FmdGoodOutlinedIcon /></IconButton>
              <Button variant='outlined' className='tweetButton'>Post</Button>
            </div>
          </div>

      </form>

    </div>
  )
}

export default TweetBox
