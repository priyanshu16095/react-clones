import React, { useState, useEffect } from 'react'
import './style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const[seed, setSeed] = useState("")

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])
  

  const sendMessage = (e) => {}

  return (
    <div className='chat'>
      
      <div className="chatHeader">
        <AccountCircleIcon style={{fontSize: '40', color:'gray'}} />
        <div className="chatHeader-info">
          <h2>Priyanshu Gupta</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chatHeader-right">
          <IconButton><SearchIcon /></IconButton>
          <IconButton><AttachFileIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
      </div>

      <div className="chatBody">
        <p className={`chatMessage ${false && 'chatReciever'}`}>
          <span className='chatName'>Priyanshu Gupta</span>
          Namaster Modi ji
          <span className='chatTimestamp'>3:52pm</span>  
        </p>
        <p className="chatMessage chatReciever">
          <span className='chatName'>Shri Narendra Modi</span>
          Namaster Priyanshu bhai
          <span className='chatTimestamp'>3:52pm</span>  
        </p>
      </div>

      <div className="chatFooter">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder='Type a message' />
          {/* <button onClick={sendMessage}>Send</button> */}
        </form>
        <MicIcon />
      </div>

    </div>
  )
}

export default Chat
