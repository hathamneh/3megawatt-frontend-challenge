import API from '../API'
import { Plant } from '../types'

class PlantsService {
  static all() {
    return API.get('plants').then(response => {
      return response.data
    })
  }

  static create(plant: Plant) {
    return API.post('plants', plant).then(response => {
      const newPlant: Plant = {
        uid: response.data.uid,
        name: response.data.name,
      }
      return newPlant
    })
  }
}

export default PlantsService
