import { Navigate, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'

export const RootCmp: FC = () => {
  return (
    <div className='App'>
      <AppHeader />
      <hr />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
