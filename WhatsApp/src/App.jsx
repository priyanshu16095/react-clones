import React from 'react'
import Sidebar from './components/Sidebar' 
import Chat from './components/Chat' 

function App() {
  return (
    <div className='app'>
      <div className="appBody">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
