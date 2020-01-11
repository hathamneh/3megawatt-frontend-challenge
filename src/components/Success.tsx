import React from 'react'
import styled from '@emotion/styled'

interface SuccessProps {
  message?: string
}

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 120px;
`
const Image = styled.img`
  width: 64px;
`
const MessageSpan = styled.span`
  display: inline-block;
  margin: 24px 0;
`

const Success: React.FC<SuccessProps> = ({ message }) => (
  <SuccessContainer>
    <Image src="/assets/check.svg" alt="Check Mark" />
    <MessageSpan>{message ? message : 'Successful'}</MessageSpan>
  </SuccessContainer>
)

export default Success
