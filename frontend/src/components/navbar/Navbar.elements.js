import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  min-width: 400px;
  padding-top: 25px;
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
  right: 30px;
`

export const NavImg = styled.img`
  max-height: 70px;
  width: auto;
`
