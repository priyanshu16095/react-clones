import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div className='navbar border-bottom'>
        <div className='flex-v'>
            <h2>Programiz</h2>
            <p>Online Code Compiler</p>
        </div>
        <div className='flex-h'>
            <button className='button-w'>Programiz PRO</button>
            <button className='button-w'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
