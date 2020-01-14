import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Select } from '../theme'
import config from '../config'

interface DatePickerProps {
  onChange: (date: Date) => void
  monthPicker?: boolean
}

const DatePickerWrapper = styled.div`
  display: flex;
`

const currentDate = new Date()

function yearsFrom(from: number): JSX.Element[] {
  let current = currentDate.getFullYear()
  const elems: JSX.Element[] = []
  while (from <= current) {
    elems.push(
      <option key={current} value={current}>
        {current}
      </option>
    )
    current--
  }
  return elems
}

function months(): JSX.Element[] {
  return config.months.map((m, i) => (
    <option key={i} value={i}>
      {m}
    </option>
  ))
}

function days(): JSX.Element[] {
  let i = 1
  const elems: JSX.Element[] = []
  while (i <= 31) {
    elems.push(
      <option key={i} value={i}>
        {`${i}`.padStart(2, '0')}
      </option>
    )
    i++
  }
  return elems
}

const DatePicker: React.FC<DatePickerProps> = ({ onChange, monthPicker }) => {
  const [year, setYear] = useState<number>(currentDate.getFullYear())
  const [month, setMonth] = useState<number>(currentDate.getMonth())
  const [day, setDay] = useState<number>(currentDate.getDate())

  useEffect(() => {
    onChange(new Date(year, month, day))
  }, [onChange, year, month, day])

  return (
    <DatePickerWrapper>
      {!monthPicker && (
        <Select onChange={e => setDay(parseInt(e.target.value))} value={day}>
          {days()}
        </Select>
      )}
      <Select onChange={e => setMonth(parseInt(e.target.value))} value={month}>
        {months()}
      </Select>
      <Select onChange={e => setYear(parseInt(e.target.value))} value={year}>
        {yearsFrom(1990)}
      </Select>
    </DatePickerWrapper>
  )
}

export default DatePicker
