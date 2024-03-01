import React, { useState, useEffect } from 'react'
import './style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SidebarChat(addNewChat) {
  const[seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    const roomName = prompt("Enter the name for chat")
    if(roomName) {}
  }
  
  return addNewChat ? (
    <div className='sidebarChat'>
      <AccountCircleIcon style={{fontSize:'35'}} src={`http://avatars.dicebar.com/api/human/${seed}`} />
      <div className="sidebarChat-info">
        <h3>Username</h3>
        <p>Last message...</p>
      </div>
    </div>
  ): (
    <div onClick={createChat} className='sidebarChat'>
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
