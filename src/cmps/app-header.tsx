import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader: FC = () => {
  return (
    <header className='app-header'>
      <nav>
        <div className='nav-home-logo'>
        <NavLink to={'/'}>HomePage</NavLink>
        </div>
        <div className='nav-search-filter'>
          Filter
        </div>
        <div className='nav-user-setting'>
          
        </div>
      </nav>
      <hr />
    </header>
  )
}
