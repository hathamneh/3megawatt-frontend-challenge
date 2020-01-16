import React from 'react'
import styled from '@emotion/styled'
import { colors } from './colors'
import { HTMLAttributes } from 'react'

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
  white-space: nowrap;
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${colors.buttonBgHover};
      box-shadow: ${colors.buttonHoverShadow};
    }
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: default ;
  }
`

export const ButtonSuccess = styled(Button)`
  background-color: ${colors.buttonSuccessBg};
  color: ${colors.white};
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${colors.buttonSuccessBgHover};
    }
  }
`

export const ButtonPrimary = styled(Button)`
  background-color: ${colors.buttonPrimaryBg};
  color: ${colors.white};
  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${colors.buttonPrimaryBgHover};
    }
  }
`

export const Page = styled.main`
  position: relative;
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Section = styled.div`
  background-color: ${colors.pageBg};
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(160, 160, 160, 0.25);
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 48px;
`

export const SmallPage = styled(Section)`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

export const SectionTitle = styled.h1`
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
  &:focus {
    box-shadow: 0 0 0 4px ${colors.focusShadow};
    outline: none;
  }
  &.error {
    border-color: ${colors.danger};
  }
`

export const SuccessMsg = styled.span`
  color: ${colors.success};
  font-size: 12px;
  font-weight: bold;
  margin: 0 16px;
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

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  column?: boolean
  justifyContent?: string
  alignItems?: string
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const SelectWrapper = styled.div`
  position: relative;
  select {
    appearance: none;
    background-color: transparent;
    padding: 6px 36px 6px 16px;
    line-height: 1.75;
    font-size: 16px;
    border: 1px solid ${colors.divider};
    //border-radius: 30px;
    transition: all 0.2s;
    position: relative;
    &:focus,
    &:hover {
      border-color: ${colors.primary};
      z-index: 1;
    }
    &:focus {
      box-shadow: 0 0 0 3px ${colors.focusShadow};
      outline: none;
    }
    &.error {
      border-color: ${colors.danger};
    }
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${colors.dark};
    pointer-events: none;
  }
  &:first-of-type select {
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
  }
  &:last-of-type select {
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
  }
  & + & {
    margin-left: -1px;
  }
`

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

export const Select: React.FC<SelectProps> = ({
  children,
  onChange,
  error,
  value,
  id
}) => (
  <SelectWrapper id="">
    <select id={id} value={value} className={error ? 'error' : ''} onChange={onChange}>
      {children}
    </select>
  </SelectWrapper>
)
