import React from 'react'
import { Outlet } from 'react-router-dom'
import './Navbar.css'

export default function Navbar():JSX.Element {
  return (
    <div className='Navbar'>
        <div>
            <div className='logo' />
        </div>
        <Outlet />
    </div>

  )
}
