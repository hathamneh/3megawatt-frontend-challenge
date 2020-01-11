import styled from '@emotion/styled'
import colors from './colors'

export const Button = styled.button`
  appearance: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.buttonBg};
  color: rgba(0, 0, 0, 0.87);
  border-radius: 30px;
  padding: 6px 16px;
  cursor: pointer;
  line-height: 1.75;
  text-transform: uppercase;
  user-select: none;
  transition: all 0.25s;
  &:hover,
  &:focus {
    background-color: ${colors.buttonBgHover};
    box-shadow: ${colors.buttonHoverShadow};
  }
  &:focus,
  &:active {
    outline: none;
  }
`

export const ButtonSuccess = styled(Button)`
  background-color: ${colors.buttonSuccessBg};
  color: ${colors.white};
  &:hover,
  &:focus {
    background-color: ${colors.buttonSuccessBgHover};
  }
`

export const ButtonPrimary = styled(Button)`
  background-color: ${colors.buttonPrimaryBg};
  color: ${colors.white};
  &:hover,
  s&:focus {
    background-color: ${colors.buttonPrimaryBgHover};
  }
`

export const Page = styled.div`
  background-color: ${colors.pageBg};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(160, 160, 160, 0.25);
  flex: 1;
  align-self: flex-start;
`

export const SmallPage = styled(Page)`
  max-width: 600px;
  margin: 0 auto;
`

export const PageTitle = styled.h1`
  font-size: 36px;
  color: ${colors.headingTitle};
  margin-top: 0;
  margin-bottom: 32px;
`

export const TextInput = styled.input`
  padding: 6px 16px;
  line-height: 1.75;
  background-color: ${colors.white};
  border: 1px solid ${colors.divider};
  border-radius: 22px;
  font-size: 16px;
  transition: all 0.25s;
  &:focus,
  &:active {
    outline: none;
    border-color: ${colors.primary};
  }
  &.error {
    border-color: ${colors.danger};
  }
`

export const ErrorMsg = styled.span`
  color: ${colors.danger};
  font-size: 12px;
  font-weight: bold;
  margin: 0 16px;
`

export const Label = styled.label`
  margin-right: 16px;
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const MutedSpan = styled.span`
  color: ${colors.muted};
`

export const HorizontalLine = styled.hr`
  border: 1px solid ${colors.divider};
  margin: 8px 0 24px;
`
