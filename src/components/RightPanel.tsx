import React from 'react'
import styled from '@emotion/styled'
import colors from '../theme/colors'
import Logo from "./Logo";
import Nav from "./Nav";

const RightPanelContainer = styled.div`
  width: 250px;
  min-height: 100vh;
  background-color: ${colors.rightPanelBg};\
  box-shadow: ${colors.boxShadow};
  position: relative;
`

const RightPanel: React.FC = () => (
  <RightPanelContainer>
    <Logo />
    <Nav />
  </RightPanelContainer>
)

export default RightPanel
