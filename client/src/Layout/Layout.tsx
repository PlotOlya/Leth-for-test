import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout():JSX.Element {
  return (
    <body className='body'>
        <Outlet />
    </body>
    
  )
}
