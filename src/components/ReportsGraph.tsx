import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js'

interface ReportsGraphProps {
  data: Chart.ChartData
}

const ReportsGraph: React.FC<ReportsGraphProps> = ({ data }) => (
  <div>
    <Bar height={125} data={data} />
  </div>
)

export default ReportsGraph
