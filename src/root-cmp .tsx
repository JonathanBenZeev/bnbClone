import { Navigate, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { AppHeader } from './cmps/app-header'


export const RootCmp: FC = () => {
  return (
    <div className='App'>
    <AppHeader />
 
      <main>
        <Routes>
     
        </Routes>
      </main>
    </div>
  )
}
