import React from 'react'
import { NavContainer, NavMain, NavItem, NavImg } from './Navbar.elements'
import LogoFlag from '../images/LogoFlag.png'

const Navbar = () => {
  return (
    <NavContainer>
      <NavMain>
        <NavItem>
          <NavImg src={LogoFlag} />
        </NavItem>
        <NavItem>Say Hello!</NavItem>
      </NavMain>
    </NavContainer>
  )
}

export default Navbar
