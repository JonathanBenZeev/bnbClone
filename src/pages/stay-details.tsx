// import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { OrderForm } from '../cmps/order-form'
// import { setStay } from '../store/stay.actions'
// import { loadUser } from '../store/user.actions'
// import { ImagGallery } from '../cmps/imag-gallery'
// import { userService } from '../services/user.service'
// import { useNavigate } from 'react-router-dom'
// import { PlaceDetails } from '../cmps/place-details'
// import { UserMsg } from '../cmps/user-msg'
// import { addOrder, loadOrders } from '../store/order.actions'
// import { Loader } from '../cmps/loader'
// import { emailService } from '../services/email.service'
import { useState, useEffect } from 'react'
import { get } from '../services/stay.service'

import { IStay } from '../interfaces/stay'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const StayDetails = () => {
  //   const navigate = useNavigate()
  //   const [isDatepickerOpen, setIsDatepickerOpen] = useState(false)
  //   const home = useSelector((storeState) => storeState.stayModule.stay)
  const [stay, setStay] = useState<IStay | null>(null)
  const { stayId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    loadStay()
  }, [])

  async function loadStay() {
    if (!stayId) return
    try {
      const stay = await get(stayId)
      // stay.avgRate = stayService.calcAvgRate(stay.reviews)
      // stay.avgRates = stayService.calcAvgRates(stay.reviews)
      setStay(stay)
    } catch (err) {
      navigate('/')
    }
  }

  //   const user = useSelector((storeState) => storeState.userModule.user)
  //   const orders = useSelector((storeState) => storeState.orderModule.orders)
  //   const [isUserMsgOpen, setIsUserMsgOpen] = useState({
  //     isOpen: false,
  //     txt: '',
  //     status: '',
  //   })
  
  //   useEffect(() => {
  //     const loggedinUser = userService?.getLoggedinUser()
  //     if (!loggedinUser) navigate('/login')
  //     else loadStay()
  //   }, [user])

  //   useEffect(() => {
  //     loadUser(userService.getLoggedinUser()?._id)
  //     loadOrders()
  //   }, [])

  //   const loadStay = () => {
  //     setStay()
  //   }

  //   const onUpdateStay = async (inventaiton) => {
  //     try {
  //       const { startDate, endDate, byUser } = inventaiton
  //       await addOrder(inventaiton)
  //       await emailService.newOrderMail(startDate, endDate, byUser)
  //       setUserMsg('Order sent successfully', 'success')
  //     } catch (err) {
  //       console.log('Can not update stay', err)
  //     }
  //   }

  //   const setUserMsg = (txt, status) => {
  //     setIsUserMsgOpen({ isOpen: true, txt, status })
  //     setTimeout(() => {
  //       closeUserMsg()
  //     }, 5000)
  //   }

  //   const getBusyDates = () => {
  //     const busyDays = []
  //     const busy = orders.filter((inventaion) => inventaion.status === 'approved')
  //     busy.forEach((day) => {
  //       let start = +day.startDate.split('/')[0]
  //       let end = +day.endDate.split('/')[0]
  //       let daysLength = end - start
  //       for (let i = 0; i <= daysLength; i++) {
  //         busyDays.push({
  //           date: start,
  //           monthDate: +day.startDate.split('/')[1] - 1,
  //           yearDate: +day.startDate.split('/')[2],
  //         })
  //         start++
  //       }
  //     })

  //     return busyDays
  //   }

  //   const closeUserMsg = () => {
  //     setIsUserMsgOpen({ isOpen: false, txt: '', status: '' })
  //   }

  //   const onTogglePicker = (ev) => {
  //     ev.stopPropagation()
  //     setIsDatepickerOpen(!isDatepickerOpen)
  //   }
  //   const onOpenPicker = (ev) => {
  //     ev.stopPropagation()
  //     setIsDatepickerOpen(true)
  //   }
  //   const onClosePicker = (ev) => {
  //     if (ev) ev.stopPropagation()
  //     setIsDatepickerOpen(false)
  //   }

  //   // console.log(user)

  //   if (!home || !user) return <Loader />
  return (
    <section className='stay-details'>
      <h3>{stay?.name}</h3>


      <div className='img-list'>
        {stay?.imgUrls.map((img, idx) => (
          <div className={`img-preview img${idx}`} key={idx}>
            <img className={` img${idx}`} src={img} alt='Loading' />
          </div>
        ))}
      </div>
      {/* <div className='date'></div>
      <h3>{home.name}</h3>

      <div className='img-list'>
        {home.imgs.map((img, idx) => (
          <div className={`img-preview img${idx}`} key={img.id}>
            <img className={` img${idx}`} src={img.img_url} alt='Loading' />
          </div>
        ))}
      </div>
      <ImagGallery imgs={home.imgs} />
      <section className='details-container'>
        <PlaceDetails />

        <OrderForm
          inventaions={getBusyDates()}
          isDatepickerOpen={isDatepickerOpen}
          onTogglePicker={onTogglePicker}
          onOpenPicker={onOpenPicker}
          onClosePicker={onClosePicker}
          onUpdateStay={onUpdateStay}
          homeId={home._id}
        />
      </section>
      {isUserMsgOpen.isOpen && (
        <UserMsg
          txt={isUserMsgOpen.txt}
          status={isUserMsgOpen.status}
          closeUserMsg={closeUserMsg}
        />
      )} */}
    </section>
  )
}
