import React from 'react'
import {
  NavContainer,
  NavMain,
  NavItem,
  NavImg,
  NavLogo,
} from './Navbar.elements'
import LogoFlag from '../images/Logo.png'

const Navbar = () => {
  return (
    <NavContainer>
      <NavMain>
        <NavLogo>
          <NavImg src={LogoFlag} />
        </NavLogo>
        <NavItem>Say Hello!</NavItem>
      </NavMain>
    </NavContainer>
  )
}

export default Navbar
