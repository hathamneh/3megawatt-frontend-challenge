import {PlantsResponse} from "../types";

export const plants_single_page: PlantsResponse = {
  results: [
    {uid: 'uid_1', name: 'plant sample 1'},
    {uid: 'uid_2', name: 'plant sample 2'},
    {uid: 'uid_3', name: 'plant sample 3'},
    {uid: 'uid_4', name: 'plant sample 4'}
  ],
  count: 4,
  next: '',
  previous: ''
}

export const plants_multi_page_1: PlantsResponse = {
  results: [
    {uid: 'uid_1', name: 'plant sample 1'},
    {uid: 'uid_2', name: 'plant sample 2'},
    {uid: 'uid_3', name: 'plant sample 3'},
    {uid: 'uid_4', name: 'plant sample 4'},
    {uid: 'uid_5', name: 'plant sample 5'},
    {uid: 'uid_6', name: 'plant sample 6'},
    {uid: 'uid_7', name: 'plant sample 7'},
    {uid: 'uid_8', name: 'plant sample 8'},
    {uid: 'uid_9', name: 'plant sample 9'},
    {uid: 'uid_10', name: 'plant sample 10'},
  ],
  count: 14,
  next: '/next_page_sample',
  previous: ''
}

export const plants_multi_page_2: PlantsResponse = {
  results: [
    {uid: 'uid_11', name: 'plant sample 11'},
    {uid: 'uid_12', name: 'plant sample 12'},
    {uid: 'uid_13', name: 'plant sample 13'},
    {uid: 'uid_14', name: 'plant sample 14'},
  ],
  count: 16,
  next: '',
  previous: '/prev_page_sample'
}