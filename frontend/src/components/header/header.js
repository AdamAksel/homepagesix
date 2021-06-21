import React from 'react'
import {
  HeadContainer,
  HeadMain,
  HeadItem1,
  HeadItem2,
  HeadItem3,
} from './Header.elements'
import avatar from '../images/avataaars.png'

const Header = () => {
  return (
    <HeadContainer>
      <HeadMain>
        <HeadItem1>Adept Full Stack Developer</HeadItem1>
        <HeadItem2>I code things, and I love what I do.</HeadItem2>
        <HeadItem3 src={avatar} />
      </HeadMain>
    </HeadContainer>
  )
}

export default Header
