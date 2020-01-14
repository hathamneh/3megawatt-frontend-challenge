import React, { useState, useEffect } from 'react'
import PlantsTable from '../components/PlantsTable'
import { PlantsService } from '../services'
import { ButtonSuccess, Section, SectionTitle, Flex } from '../theme'
import styled from '@emotion/styled'
import { Link, useParams } from 'react-router-dom'
import { Plant } from '../types'
import config from '../config'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'

const NewPlantButton = styled(ButtonSuccess)`
  margin-bottom: 24px;
`

const PaginationWrapper = styled.div`
  margin-left: auto;
`

const PlantsPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [plants, setPlants] = useState<Plant[]>([])
  const [pageNumbers, setPageNumbers] = useState(1)
  const { page } = useParams()

  useEffect(() => {
    const pageNumber = page ? parseInt(page) - 1 : 0

    setLoading(true)
    PlantsService.get({ page: pageNumber }).then(plantsRes => {
      setPlants(plantsRes.results)
      setPageNumbers(Math.ceil(plantsRes.count / config.plant_per_page))

      setLoading(false)
    })
  }, [page])

  return (
    <Section>
      <SectionTitle>All Plants</SectionTitle>
      <Flex>
        <Link to={'/plants/new'}>
          <NewPlantButton>+ Add New Plant</NewPlantButton>
        </Link>
        {!loading && pageNumbers && (
          <PaginationWrapper>
            <Pagination total={pageNumbers} baseUrl={'/plants/list'} />
          </PaginationWrapper>
        )}
      </Flex>
      {loading ? (
        <Flex alignItems="center" justifyContent="center">
          <Loader />
        </Flex>
      ) : (
        <PlantsTable
          plants={plants}
          onDelete={(plant: Plant) => {
            const uid: string = plant.uid || ''
            PlantsService.drop(uid).then(() => {
              setPlants(plants.filter(p => p.uid !== uid))
            })
          }}
        />
      )}
    </Section>
  )
}

export default PlantsPage
