import React, { useCallback, useState } from 'react'
import { Flex, MutedSpan, Section, SectionTitle } from '../theme'
import ReportsFilters from '../components/ReportsFilters'
import { DatapointsService } from '../services'
import {Plant, ReportParameters} from '../types'
import ReportsGraph from '../components/ReportsGraph'
import Chart from 'chart.js'
import Loader from '../components/Loader'

interface ReportsSectionProps {
  plants: Plant[]
}

const ReportsSection: React.FC<ReportsSectionProps> = ({plants}) => {
  const [chartData, setChartData] = useState<Chart.ChartData>({})
  const [chartLoading, setChartLoading] = useState(false)

  const onFiltersChange = useCallback<(params: ReportParameters) => void>(
    params => {
      if (params.plant?.uid) {
        setChartLoading(true)
        DatapointsService.report(params).then(chartData => {
          setChartData(chartData)
          setChartLoading(false)
        })
      } else {
        setChartData({})
      }
    },
    []
  )

  return (
    <Section>
      <SectionTitle>Reports</SectionTitle>
      <ReportsFilters plants={plants} onChange={onFiltersChange} />
      {chartLoading ? (
        <Flex alignItems="center" justifyContent="center">
          <Loader />
        </Flex>
      ) : (
        <>
          {chartData.labels && chartData.labels.length > 0 ? (
            <ReportsGraph data={chartData} />
          ) : (
            <Flex justifyContent="center" style={{ margin: '48px 0' }}>
              <MutedSpan>No Data!</MutedSpan>
            </Flex>
          )}
        </>
      )}
    </Section>
  )
}
export default ReportsSection
