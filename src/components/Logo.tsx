import React from 'react'
import styled from '@emotion/styled'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
`

const Logo: React.FC = () => (
  <LogoContainer>
    <img src="/assets/logo.png" alt="" />
  </LogoContainer>
)

export default Logo
