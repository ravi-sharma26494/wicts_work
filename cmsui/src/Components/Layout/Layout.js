import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
const Layout = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout