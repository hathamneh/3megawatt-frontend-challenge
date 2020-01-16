import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UpdateDatapoint from '../components/UpdateDatapoints'
import {Plant, UpdateDatapointsParams} from '../types'
import { plants_single_page } from '../__fixtures__/plants_sample'

const onUpdate = jest.fn()

it('validates the form', () => {
  const plants: Plant[] = plants_single_page.results

  const { getByLabelText, getByText, container } = render(
    <UpdateDatapoint plants={plants} onUpdate={onUpdate} />
  )

  const plantNameSelect = getByLabelText('Plant:')
  fireEvent.change(plantNameSelect, { target: { value: '' } })

  const AddPlantButton = getByText('Update Server Data')
  fireEvent.click(AddPlantButton)

  expect(onUpdate).not.toBeCalled()
  expect(container).toHaveTextContent('Plant is required!')
})

it('updates the plant', () => {
  const plants: Plant[] = plants_single_page.results
  const selectedIndex = 2
  const selectedPlant: Plant = plants[selectedIndex]
  const onDatapointsUpdate = (params: UpdateDatapointsParams) => {
    expect(params).toHaveProperty('plant_id')
    expect(params).toHaveProperty('from_date')
    expect(params).toHaveProperty('to_date')
    expect(params.plant_id).toEqual(selectedPlant.uid)
    onUpdate()
  }

  const { getByLabelText, getByText, container } = render(
    <UpdateDatapoint plants={plants} onUpdate={onDatapointsUpdate} />
  )

  const plantNameSelect = getByLabelText('Plant:')
  fireEvent.change(plantNameSelect, { target: { value: selectedIndex } })

  const AddPlantButton = getByText('Update Server Data')
  fireEvent.click(AddPlantButton)

  expect(onUpdate).toBeCalled()
})
