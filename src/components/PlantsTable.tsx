import React from 'react'
import { Plant } from '../types'
import { Button, colors } from '../theme'
import styled from '@emotion/styled'

const Table = styled.table`
  th {
    background-color: ${colors.appBg};
  }
  th,
  td {
    text-align: left;
    padding: 8px 16px;
  }
  td {
    border-top: 1px solid ${colors.divider};
    &:first-of-type {
      width: 100%;
    }
  }
  tr:hover {
    background-color: #fafafa;
  }
`

interface PlantsTableProps {
  plants: Plant[]
  onDelete: (plant: Plant) => void
}

const PlantsTable: React.FC<PlantsTableProps> = ({ plants, onDelete }) => (
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
          <Button onClick={() => onDelete(plant)}>Delete</Button>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
)


export default PlantsTable
