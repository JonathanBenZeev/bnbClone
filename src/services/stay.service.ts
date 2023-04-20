import { utilService } from './util.service'
import { IFilter } from '../interfaces/filter'

let gFiltersI: IFilter[] = require('../assets/data/filters.json')
// console.log(gFiltersI);
// getFiltersI()

export function getFiltersI(): IFilter[] {
  let filters = [...gFiltersI]

  filters.forEach((filter) => (filter._id = utilService.makeId()))

  return filters
}
