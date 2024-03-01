import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ avatar, displayName, userName, verified, text, image}) {
  return (
    <div className='post'>
        <Avatar alt="Cindy Baker"  src="https://api.dicebear.com/7.x/pixel-art/svg" style={{margin:'10px'}} />

        <div className="postContent">
            <div className="postContent-user">
                <div className='user'>
                  <h3>Priyanshu Gupta</h3>
                  <VerifiedIcon style={{fontSize:'20', color:'var(--twitterBlue)'}} />
                </div>
                <p>@priyanshu16095</p>
                <p>4h</p>
            </div>

            <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className="postFooter">
              <IconButton><ChatBubbleOutlineOutlinedIcon /><p>85</p></IconButton>
              <IconButton><RepeatIcon /><p>132</p></IconButton>
              <IconButton><FavoriteBorderIcon /><p>1.2k</p></IconButton>
              <IconButton><PublishIcon /><p>181k</p></IconButton>
            </div>
        </div>


    </div>
  )
}

export default Post
