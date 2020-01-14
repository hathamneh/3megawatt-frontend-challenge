export interface Config {
  api_url: string
  plant_per_page: number
  months: string[]
}

export interface Plant {
  uid?: string
  name: string
}

export interface PlantsResponse {
  count: number
  next?: string
  previous?: string
  results: Plant[]
}

export enum ReportType {
  Energy,
  Irradiation,
}

export interface ReportParameters {
  plant?: Plant
  reportType?: ReportType
  date?: Date
}

export interface ReportRequestParams {
  plant_id: string
  date: string
}

export interface Datapoint {
  day: string
  total_energy_expected: number
  total_energy_observed: number
  total_irradiation_expected: number
  total_irradiation_observed: number
}

export interface UpdateDatapointsParams {
  plant_id: string
  from_date: string
  to_date: string
}

export interface UpdateDatapointsResponse {
  ok: boolean
  error?: string
}

export type ReportResponse = Datapoint[]

interface Exception {
  message: string
}

export class InvalidArgumentException implements Exception {
  message: string
  constructor(message?: string) {
    this.message = message || 'InvalidArgumentException'
  }
}
