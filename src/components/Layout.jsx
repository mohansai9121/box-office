import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Title from './Title'

const Layout = () => {
  return (
    <div>
        <center>
            <Title/>
            <Navigation/>
        </center>
      <Outlet/>
    </div>
  )
}

export default Layout
