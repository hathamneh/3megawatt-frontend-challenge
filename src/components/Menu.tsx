import React from 'react'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../theme'
import Logo from './Logo'
import Nav from './Nav'

const RightPanelContainer = styled.div`
  width: 250px;
  min-height: 450px;
  height: 100vh;
  background-color: ${colors.rightPanelBg};
  box-shadow: ${colors.boxShadow};
  position: sticky;
  top: 0;
  z-index: 99;
  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 90px;
    min-height: 0;
  }
`

const Menu: React.FC = () => (
  <RightPanelContainer>
    <Logo />
    <Nav />
  </RightPanelContainer>
)

export default Menu
