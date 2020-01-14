import API from '../API'
import { Plant, PlantsResponse } from '../types'
import config from '../config'

const plantsEndPoint = 'plants'

interface GetPlantsOptions {
  page?: number
  limit?: number
}

export class PlantsService {
  static get(options?: GetPlantsOptions): Promise<PlantsResponse> {
    const { page, limit } = options || {}
    const params = { offset: 0, limit: config.plant_per_page }
    if (page) params.offset = page * config.plant_per_page
    if (limit) params.limit = limit

    return API.get(plantsEndPoint, { params }).then(response => {
      return response.data
    })
  }

  static create(plant: Plant): Promise<Plant> {
    return API.post(plantsEndPoint, plant).then(response => {
      const newPlant: Plant = {
        uid: response.data.uid,
        name: response.data.name,
      }
      return newPlant
    })
  }

  static drop(uid: string): Promise<boolean> {
    return API.delete(`${plantsEndPoint}/${uid}`)
      .then(() => true)
      .catch(() => false)
  }
}
