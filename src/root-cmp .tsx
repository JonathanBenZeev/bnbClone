import { Navigate, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'
import { StayDetails } from './pages/stay-details'

export const RootCmp: FC = () => {
  return (
    <div className='App'>
      <AppHeader />
      <hr />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stay/:stayId' element={<StayDetails />} />
        </Routes>
      </main>
    </div>
  )
}
