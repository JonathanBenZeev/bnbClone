// import { UserModel } from './../Models/User.Model'
import { httpService } from './http.service'
// import { v4 as uuid } from 'uuid'

// export async function get(userId: string): Promise<UserModel | null> {
//   if (!userId) return null
//   return await httpService.get(`user/${userId}`)
// }

export function remove(userId: string) {
  return httpService.delete(`user/${userId}`)
}

// export async function signup(credentials: UserModel) {
//   try {
//     credentials = { ...credentials, id: uuid(), stayIds: [] }
//     const user = await httpService.post('user/', credentials)
//     _saveLoggedinUser(user)
//     return user
//   } catch (error) {
//     throw error
//   }
// }

// export async function login(credentials: UserModel) {
//   const user = await httpService.post('user/login', credentials)
//   if (!user) return Promise.reject('Login failed')
//   _saveLoggedinUser(user)
//   return Promise.resolve(user)
// }

// function getUsers() {
//   // return storageService.query(USER_KEY)
//   return httpService.get(`user`)
// }

// async function updateUser(user) {
//   // if (inventaiton) {
//   //     const updatedOrders = utilService.statusValidiation(user.inventaions, inventaiton)
//   //     console.log(updatedOrders);
//   //     user.inventaions = updatedOrders
//   // }
//   // console.log(user);
//   // return storageService.put(USER_KEY, user)
//   return await httpService.put(`user/${user._id}`, user)
// }

// function getEmptyCredentials(fullname = '', username = '', password = '') {
//   return { fullname, username, password }
// }

// function getLoggedinUser(): UserModel | null {
//   //   return JSON.parse(sessionStorage.getItem('loggedinUser') || null)
//   const loggedInUser = sessionStorage.getItem('loggedinUser')
//   if (loggedInUser) {
//     return JSON.parse(loggedInUser)
//   }
//   return null
// }

// function logout() {
//   sessionStorage.removeItem('loggedinUser')
//   return Promise.resolve()
// }

// function _saveLoggedinUser(user: UserModel) {
//   sessionStorage.setItem('loggedinUser', JSON.stringify(user))
// }
