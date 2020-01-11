import React from 'react'
import { Plant } from '../types'
import { Button } from '../theme/SharedComponents'
import styled from "@emotion/styled";
import colors from "../theme/colors";

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
`


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
