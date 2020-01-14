import React, { useState } from 'react'
import {
  SmallPage,
  SectionTitle,
  HorizontalLine,
  Button,
  ButtonPrimary,
  Flex,
} from '../theme'
import PlantsForm from '../components/PlantsForm'
import {PlantsService} from '../services'
import Success from '../components/Success'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Loader from '../components/Loader'

const SavedContainer = styled.div`
  text-align: center;
`

const NewPlantsPage: React.FC = () => {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  return (
    <SmallPage>
      <SectionTitle>Add New Plant</SectionTitle>
      <HorizontalLine />
      {saved ? (
        <SavedContainer>
          <Success message={'Saved!'} />
          <Link style={{ marginRight: '16px' }} to={'/plants/list'}>
            <ButtonPrimary>Show All Plants</ButtonPrimary>
          </Link>
          <Button onClick={() => setSaved(false)}>Add Another</Button>
        </SavedContainer>
      ) : (
        <>
          {saving ? (
            <Flex alignItems="center" justifyContent="center">
              <Loader />
            </Flex>
          ) : (
            <PlantsForm
              onSave={async plant => {
                setSaving(true)
                PlantsService.create(plant).then(() => {
                  setSaving(false)
                  setSaved(true)
                })
              }}
            />
          )}
        </>
      )}
    </SmallPage>
  )
}
export default NewPlantsPage
