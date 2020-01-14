import API from '../API'
import {
  Datapoint,
  InvalidArgumentException,
  ReportParameters,
  ReportRequestParams,
  ReportResponse,
  ReportType,
  UpdateDatapointsParams,
  UpdateDatapointsResponse,
} from '../types'
import { colors } from '../theme'
import Chart from 'chart.js'
import { getFormattedDate } from '../utils'

const datapointsEndPoint = 'datapoints'

export class DatapointsService {
  static report(options: ReportParameters): Promise<Chart.ChartData> {
    if (!options.plant || !options.date) throw new InvalidArgumentException()
    const type: ReportType = options.reportType || ReportType.Energy
    const postData: ReportRequestParams = {
      plant_id: options.plant.uid || '',
      date: getFormattedDate(options.date),
    }
    return API.post<ReportResponse>(
      `${datapointsEndPoint}/report`,
      postData
    ).then(res => {
      const data: ReportResponse = res.data
      return this.prepareForChartJS(data, type)
    })
  }

  static prepareForChartJS(
    data: Datapoint[],
    type: ReportType
  ): Chart.ChartData {
    return {
      labels: data.map(item => item.day),
      datasets: [
        {
          label: 'Expected',
          data: data.map(
            item =>
              item[
                type === ReportType.Irradiation
                  ? 'total_irradiation_expected'
                  : 'total_energy_expected'
              ]
          ),
          backgroundColor: colors.success,
        },
        {
          label: 'Observed',
          data: data.map(
            item =>
              item[
                type === ReportType.Irradiation
                  ? 'total_irradiation_observed'
                  : 'total_energy_observed'
              ]
          ),
          backgroundColor: colors.primary,
        },
      ],
    }
  }

  static update(
    params: UpdateDatapointsParams
  ): Promise<UpdateDatapointsResponse> {
    return API.post<UpdateDatapointsResponse>(
      `${datapointsEndPoint}/update`,
      params
    ).then(res => {
      return res.data
    })
  }
}
