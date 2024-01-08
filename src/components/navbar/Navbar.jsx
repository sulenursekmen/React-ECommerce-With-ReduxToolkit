import React from 'react'
import { NavbarLeft } from './navbarItem/NavbarLeft'
import { NavbarRight } from './navbarItem/NavbarRight'

export const Navbar = () => {
  return (
    <div className='navbar-div'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}
