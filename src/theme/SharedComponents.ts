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
  transition: all 0.25s;
  &:hover {
    background-color: ${colors.buttonBgHover};
    box-shadow: ${colors.buttonHoverShadow};
  }
`

export const ButtonSuccess = styled(Button)`
  background-color: ${colors.buttonSuccessBg};
  color: ${colors.white};
  &:hover {
    background-color: ${colors.buttonSuccessBgHover};
  }
`

export const Page = styled.div`
  background-color: ${colors.pageBg};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(160, 160, 160, 0.25);
`

export const PageTitle = styled.h1`
  font-size: 36px;
  color: ${colors.headingTitle};
  margin-top: 0;
  margin-bottom: 32px;
`

export const Table = styled.table`
  th {
    background-color: ${colors.appBg};
  }
  th,
  td {
    text-align: left;
    padding: 8px 16px;
  }
  td {
    border-top: 1px solid ${colors.divider};
    &:first-child {
      width: 100%;
    }
  }
`
