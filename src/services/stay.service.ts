import { storageService } from './async-storage.service'
import { IStay, IStayPreview } from './../interfaces/stay'
import { utilService } from './util.service'
import { IFilter } from '../interfaces/filter'
const STAY_DB_KEY = 'stayDB'

var gStays: IStay[] = require('../assets/data/minified-stays.json')
let gFiltersI: IFilter[] = require('../assets/data/filters.json')
// console.log(gStays);
// getFiltersI()
_initStays()

export async function query() {
  try {
    let stays = (await storageService.query(STAY_DB_KEY)) as IStay[]
    let stayPreviews: IStayPreview[] = stays.map((stay: IStay) =>
      _arrangePreviewData(stay)
    )
    return stayPreviews
  } catch (err) {
    console.log('err:', err)
  }
}

export function getFiltersI(): IFilter[] {
  let filters = [...gFiltersI]

  filters.forEach((filter) => (filter._id = utilService.makeId()))

  return filters
}

function _initStays() {
  let stays
  let storeStays = localStorage.getItem(STAY_DB_KEY)
  stays = storeStays ? JSON.parse(storeStays) : []

  if (!stays || !stays.length) {
    let stays
    let storeStays = localStorage.getItem(STAY_DB_KEY)
    stays = storeStays ? JSON.parse(storeStays) : []
    if (!stays || !stays.length) {
      stays = [...gStays]
      stays.forEach((stay) => {
        stay._id = utilService.makeId()
      })
      localStorage.setItem(STAY_DB_KEY, JSON.stringify(stays))
    }
  }
}

function _arrangePreviewData(stay: IStay): IStayPreview {
  return {
    _id: stay._id,
    name: stay.name,
    price: stay.price,
    imgUrls: stay.imgUrls,
    isSuperHost: stay.host.isSuperHost,
    loc: stay.loc,
    // avgRate: calcAvgRate(stay.reviews),
    type: stay.type,
    filters: stay.filters,
    region: stay.region,
  }
}
