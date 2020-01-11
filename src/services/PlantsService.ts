import API from '../API'
import { Plant, PlantsResponse } from '../types'
import config from '../config'

const plantsEndPoint = 'plants'

class PlantsService {
  static get(page?: number): Promise<PlantsResponse> {
    let offset = 0
    if (page) offset = page * config.plant_per_page

    return API.get(plantsEndPoint, { params: { offset } }).then(response => {
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

export default PlantsService
