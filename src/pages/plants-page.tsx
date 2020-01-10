import React, { useState, useEffect } from 'react'
import PlantsTable from '../components/PlantsTable'
import PlantsService from '../services/PlantsService'
import { ButtonSuccess, Page, PageTitle } from '../theme/SharedComponents'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const NewPlantButton = styled(ButtonSuccess)`
  margin-bottom: 24px;
`

const PlantsPage: React.FC = () => {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const plantsRes = await PlantsService.all()
      setPlants(plantsRes.results)
    }
    fetchData()
  }, [])

  return (
    <Page>
      <PageTitle>All Plants</PageTitle>
      <Link to={'/plants/new'}>
        <NewPlantButton>+ Add New Plant</NewPlantButton>
      </Link>
      <PlantsTable plants={plants} />
    </Page>
  )
}

export default PlantsPage
