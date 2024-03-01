import React from 'react'
import './style.css'
import SidebarChat from './SidebarChat'
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className='sidebar'>

        <div className="sidebarHeader">
            <IconButton><AccountCircleIcon style={{fontSize: '35'}} /></IconButton>
            <div className="sidebarHeader-icons">
                <IconButton><DonutLargeIcon /></IconButton>
                <IconButton><ChatIcon /></IconButton>
                <IconButton><MoreVertIcon /></IconButton>
            </div>
        </div>

        <div className="sidebarSearch">
            <div className="sidebarSearch-contianer">
                <SearchIcon />
                <input type="text" placeholder='Search or start new chat'/>
            </div>
        </div>

        <div className="sidebarChats">
            <SidebarChat addNewChat />
            <SidebarChat addNewChat />
            <SidebarChat addNewChat />
        </div>
      
    </div>
  )
}

export default Sidebar
