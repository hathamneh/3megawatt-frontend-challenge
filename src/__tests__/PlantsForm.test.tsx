import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PlantsForm from '../components/PlantsForm'
import { Plant } from '../types'

const onSave = jest.fn()

it('validates plant name', () => {
  const { getByText, container, getByLabelText } = render(
    <PlantsForm onSave={() => {}} />
  )

  const AddPlantButton = getByText('Add Plant')
  fireEvent.click(AddPlantButton)

  const plantNameInput = getByLabelText('Plant Name:')
  fireEvent.change(plantNameInput, { target: { value: '' } })

  expect(onSave).not.toBeCalled()
  expect(container).toHaveTextContent('The plant name is required')
})

it('adds plant', () => {
  const onSavePlant = (plant: Plant) => {
    expect(plant).toHaveProperty('name')
    expect(plant.name).toEqual('new plant')
    onSave()
  }

  const { getByText, getByLabelText } = render(
    <PlantsForm onSave={onSavePlant} />
  )

  const plantNameInput = getByLabelText('Plant Name:')
  fireEvent.change(plantNameInput, { target: { value: 'new plant' } })

  const AddPlantButton = getByText('Add Plant')
  fireEvent.click(AddPlantButton)

  expect(onSave).toBeCalled()
})
