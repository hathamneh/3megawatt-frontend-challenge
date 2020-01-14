import React, { useEffect, useState } from 'react'
import { PlantsService } from '../services'
import { Plant } from '../types'
import ReportsSection from '../components/reports-section'
import DatapointsSection from '../components/datapoints-section'

const DashboardPage: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([])

  useEffect(() => {
    PlantsService.get({
      limit: 50,
    }).then(plantsRes => setPlants(plantsRes.results))
  }, [])

  return (
    <>
      <ReportsSection plants={plants} />
      <DatapointsSection plants={plants} />
    </>
  )
}
export default DashboardPage
