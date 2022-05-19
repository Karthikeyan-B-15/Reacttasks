import React from 'react'
import logo from '../assets/reacticon.png'
import '../css/navbar.css'

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-left'>
        <img src={logo} alt="" height={28}/>
        <h2>ReactFacts</h2>
        </div>
        <h3>React Course - Project 1</h3>

    </div>
  )
}

export default Navbar