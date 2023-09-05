import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'

const RootLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <div>Footer</div>
    </>
  )
}

export default RootLayout