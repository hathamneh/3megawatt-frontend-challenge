import React, { useCallback, useEffect, useState } from 'react'
import { Plant, ReportParameters, ReportType } from '../types'
import { Flex, FormGroup as FG, Label, MutedSpan, Select } from '../theme'
import styled from '@emotion/styled'
import DatePicker from './DatePicker'

interface ReportsFiltersProps {
  plants: Plant[]
  onChange: (params: ReportParameters) => void
}

const FormGroup = styled(FG)`
  margin-right: 18px;
`

const ReportsFilters: React.FC<ReportsFiltersProps> = ({
  plants,
  onChange,
}) => {
  const [plant, setPlant] = useState<Plant>({ name: '' })
  const [reportType, setReportType] = useState<ReportType>(ReportType.Energy)
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    onChange({ plant, reportType, date })
  }, [onChange, plant, reportType, date])

  const handleDateChange = useCallback<(date: Date) => void>(
    date => setDate(date),
    []
  )

  return (
    <Flex>
      <FormGroup>
        <Label>Plant:</Label>
        <Select
          onChange={e => {
            const index: number = parseInt(e.target.value)
            setPlant(plants[index])
          }}
        >
          <option value="">-- Select --</option>
          {plants.map((plant, i) => (
            <option key={i} value={i}>
              {plant.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Type:</Label>
        <Select onChange={e => setReportType(parseInt(e.target.value))}>
          <option value={ReportType.Energy}>Energy</option>
          <option value={ReportType.Irradiation}>Irradiation</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Month:</Label>
        <DatePicker onChange={handleDateChange} monthPicker={true} />
      </FormGroup>
      <FormGroup>
        <MutedSpan>
          <small>
            Changing parameters will redraw the graph automatically.
          </small>
        </MutedSpan>
      </FormGroup>
    </Flex>
  )
}

export default ReportsFilters
