import React, { useCallback, useState } from 'react'
import { Plant, UpdateDatapointsParams } from '../types'
import { getFormattedDate } from '../utils'
import {
  ButtonPrimary,
  ErrorMsg,
  FormGroup,
  Label,
  Select,
  SuccessMsg,
} from '../theme'
import styled from '@emotion/styled'
import DatePicker from './DatePicker'
import Loader from './Loader'

interface UpdateDatapointsProps {
  plants: Plant[]
  onUpdate: (params: UpdateDatapointsParams) => void
  loading?: boolean
  error?: string
  success?: boolean
}

const UpdateDatapointWrapper = styled.div``

const UpdateDatapoint: React.FC<UpdateDatapointsProps> = ({
  plants,
  onUpdate,
  loading,
  error,
  success,
}) => {
  const [plant, setPlant] = useState<Plant>({ name: '' })
  const [fromDate, setFromDate] = useState<Date>(new Date())
  const [toDate, setToDate] = useState<Date>(new Date())
  const [plantValidationError, setPlantValidationError] = useState(false)

  const update = () => {
    if (!plant.uid) {
      setPlantValidationError(true)
      return
    }
    setPlantValidationError(false)
    onUpdate({
      plant_id: plant.uid || '',
      from_date: getFormattedDate(fromDate),
      to_date: getFormattedDate(toDate),
    })
  }

  const updateFromDate = useCallback<(date: Date) => void>(
    date => setFromDate(date),
    []
  )
  const updateToDate = useCallback<(date: Date) => void>(
    date => setToDate(date),
    []
  )

  return (
    <UpdateDatapointWrapper>
      <FormGroup>
        <Label htmlFor="plant">Plant:</Label>
        <Select
          id="plant"
          onChange={e => {
            if (e.target.value !== '') {
              const index: number = parseInt(e.target.value)
              setPlant(plants[index])
              setPlantValidationError(false)
            } else {
              setPlant({ name: '' })
            }
          }}
          error={plantValidationError}
        >
          <option value="">-- Select --</option>
          {plants.map((plant, i) => (
            <option key={i} value={i}>
              {plant.name}
            </option>
          ))}
        </Select>
        {plantValidationError && <ErrorMsg>Plant is required!</ErrorMsg>}
      </FormGroup>

      <FormGroup>
        <Label>Start Date:</Label>
        <DatePicker onChange={updateFromDate} />
      </FormGroup>

      <FormGroup>
        <Label>End Date:</Label>
        <DatePicker onChange={updateToDate} />
      </FormGroup>

      <ButtonPrimary disabled={loading} onClick={() => update()}>
        Update Server Data
      </ButtonPrimary>
      {loading && <Loader inline={true} />}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {success && (
        <SuccessMsg>Points have been updated successfully!</SuccessMsg>
      )}
    </UpdateDatapointWrapper>
  )
}

export default UpdateDatapoint
