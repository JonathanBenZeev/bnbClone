import { IUser } from './user'
import { IReview } from './review'
import { IHost } from './host'
export interface IStay {
  _id: string
  name: string
  type: string
  imgUrls: string[]
  price: number
  summary: string
  amenities: string[]
  roomType: string
  host: IHost
  loc: ILocation
  reviews: IReview[]
  likedByUsers: IUser[]
  labels: string[]
  stayDetails: { [key: string]: number }
  avgRates?: { [k: string]: number }
  avgRate?: string
  filters: string[]
  region: string
}

export interface IStayPreview {
  _id: string
  name: string
  type: string
  imgUrls: string[]
  price: number
  isSuperHost: boolean
  loc: ILocation
  // avgRate: string
  filters: string[]
  region: string
  // likedByUser: boolean;
}

export interface ILocation {
  country: string
  countryCode: string
  city: string
  address: string
  lat: number
  lng: number
}
