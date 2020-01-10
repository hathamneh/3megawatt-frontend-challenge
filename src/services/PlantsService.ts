import API from '../API'

class PlantsService {
  static all() {
    return API.get('plants').then(response => {
      return response.data
    })
  }
}

export default PlantsService
