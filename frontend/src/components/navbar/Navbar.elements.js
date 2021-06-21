import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  min-width: 400px;
  padding-top: 10px;
`

export const NavMain = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
`

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px solid darkblue;
  font-weight: 700;
  color: darkblue;
  height: 50px;
  max-width: 110px;
  min-width: 100px;
  @media (max-width: 1200px) {
    position: absolute;
    right: 10px;
  }
`
export const NavLogo = styled.div`
  position: relative;
  right: 60px;
  @media (max-width: 1200px) {
    position: absolute;
    left: 10px;
  }
`

export const NavImg = styled.img`
  max-height: 70px;
  width: auto;
`
