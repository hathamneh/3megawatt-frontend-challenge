import React from 'react'
import { Plant } from '../types'
import { Button, Table } from '../theme/SharedComponents'

interface PlantsTableProps {
  plants: Plant[]
}

const PlantsTable: React.FC<PlantsTableProps> = (props: PlantsTableProps) => {
  const { plants } = props
  return (
    <Table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th>Plant Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {plants.map((plant, i) => (
          <tr key={i}>
            <td>{plant.name}</td>
            <td>
              <Button>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PlantsTable
