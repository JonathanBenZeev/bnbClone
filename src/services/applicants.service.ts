// import { ApplicantModel } from './../Models/ApplicantModel'
import { httpService } from './http.service'
// import { v4 as uuid } from 'uuid'

// export async function query(stayId: string): Promise<[ApplicantModel]> {
//   try {
//     let orders = await httpService.get('applicant/', {})
//     orders = orders.filter((order: ApplicantModel) => order.stayId === stayId) //front
//     return orders
//   } catch (err) {
//     console.log(err)
//     throw err
//   }
// }
// export async function save(applicant: ApplicantModel): Promise<void> {
//   try {
//     // applicant = { ...applicant, id: uuid() }
//     await httpService.post('applicant/', applicant)
//   } catch (err) {
//     console.log(err)
//     throw err
//   }
// }
export async function remove(applicantId: string): Promise<void> {
  try {
    console.log('applicantId', applicantId)
    await httpService.delete('applicant/' + applicantId)
  } catch (err) {
    console.log(err)
    throw err
  }
}
