import React, { FC } from 'react'
// import { NavLink } from 'react-router-dom'
import Logo from '../../src/assets/img/Logo.png'
import { useNavigate } from 'react-router'

export const AppHeader: FC = () => {
  const navigate = useNavigate()

  return (
    <header className='app-header'>
      <div className='nav-home-logo' onClick={()=>navigate('/')}>
        <img src={Logo} alt='' />
        <span> cloneBnb</span>
      </div>
      <div className='nav-search-filter'>
        <span>
          <h4>Anywhere</h4>
        </span>
        <span>
          <h4>Any week</h4>
        </span>
        <span>
          <h4>Add guest</h4>
        </span>
      </div>
      <div className='nav-user-setting'>
        <div>user</div>
        <div>setting</div>
        <div>something</div>
      </div>
    </header>
  )
}
