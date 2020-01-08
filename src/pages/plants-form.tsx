import React  from 'react'
import {useParams} from 'react-router-dom'

const PlantsForm: React.FC = () => {
  let { plantUid } = useParams()
  return <h1>Hello PlantsForm for {plantUid}</h1>
}

export default PlantsForm
