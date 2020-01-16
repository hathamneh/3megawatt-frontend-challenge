import React from 'react'
import {
  render,
  fireEvent,
} from '@testing-library/react'
import { plants_single_page } from '../__fixtures__/plants_sample'
import PlantsTable from '../components/PlantsTable'
import { Plant } from '../types'

it('displays the plants', () => {
  const plants: Plant[] = plants_single_page.results
  const { container } = render(
    <PlantsTable plants={plants} onDelete={() => {}} />
  )
  container
    .querySelectorAll('tbody td:first-child')
    .forEach((td, i) => expect(td).toHaveTextContent(plants[i].name))
})

it('deletes a plant', async () => {
  let plants: Plant[] = plants_single_page.results
  const indexToDelete = 2
  const plantToDelete: Plant = plants[indexToDelete]

  const { getByText, rerender, container } = render(
    <PlantsTable
      plants={plants}
      onDelete={() =>
        (plants = plants.filter(p => p.uid !== plantToDelete.uid))
      }
    />
  )

  let rowToDelete = getByText(plantToDelete.name).closest('tr')
  if (!rowToDelete) return
  const deleteButton = rowToDelete.querySelector('.delete-button')
  if (!deleteButton) return
  fireEvent.click(deleteButton)
  const confirmDeleteButton = rowToDelete.querySelector(
    '.confirm-delete-button'
  )
  if (!confirmDeleteButton) return
  fireEvent.click(confirmDeleteButton)

  rerender(
    <PlantsTable
      plants={plants}
      onDelete={() =>
        (plants = plants.filter(p => p.uid !== plantToDelete.uid))
      }
    />
  )

  expect(container).not.toHaveTextContent(plantToDelete.name)
  expect(plants).not.toContain<Plant>(plantToDelete)
})
