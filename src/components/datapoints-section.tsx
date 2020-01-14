import React, { useState } from 'react'
import { Section, SectionTitle } from '../theme'
import { DatapointsService } from '../services'
import {Plant, UpdateDatapointsParams} from '../types'
import UpdateDatapoint from '../components/UpdateDatapoints'

interface DatapointsSectionProps {
  plants: Plant[]
}

const DatapointsSection: React.FC<DatapointsSectionProps> = ({plants}) => {
  const [updatePointsLoading, setUpdatePointsLoading] = useState(false)
  const [updatePointsError, setUpdatePointsError] = useState<
    string | undefined
  >(undefined)
  const [pointsUpdated, setPointsUpdated] = useState(false)


  const updatePoints = (params: UpdateDatapointsParams) => {
    // reset states
    setUpdatePointsLoading(true)
    setPointsUpdated(false)
    setUpdatePointsError(undefined)

    // server request
    DatapointsService.update(params)
      .then(res => {
        setUpdatePointsLoading(false)
        if (!res.ok) {
          setUpdatePointsError(res.error)
        } else {
          // if everything okay show success msg and hide it 5s later
          setPointsUpdated(true)
          setTimeout(() => setPointsUpdated(false), 5000)
        }
      })
      .catch(() => {
        setUpdatePointsLoading(false)
        setUpdatePointsError('Something went wrong!')
      })
  }

  return (
    <Section>
      <SectionTitle>Update Datapoints</SectionTitle>
      <UpdateDatapoint
        plants={plants}
        onUpdate={updatePoints}
        loading={updatePointsLoading}
        error={updatePointsError}
        success={pointsUpdated}
      />
    </Section>
  )
}
export default DatapointsSection
