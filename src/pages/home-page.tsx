import { FC, useEffect } from 'react'
import { FilterScroll } from '../cmps/filter-scroll'
import { getFiltersI } from '../services/stay.service'
import { StayList } from '../cmps/stay-list'
import { query } from '../services/stay.service'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { loadStays } from '../store/stay/stay.actions'
import { useNavigate } from 'react-router-dom'

export const HomePage: FC = (): JSX.Element => {
  const { stays, isLoading } = useSelector(
    (storeState: RootState) => storeState.stayModule
  )
  const navigate = useNavigate()

  useEffect(() => {
    loadStays()
  }, [])

  function onStayClick(stayId: string) {
    navigate(`/stay/${stayId}`)
  }

  if (isLoading) return <h1>Loading...</h1>
  return (
    <section className='home-page'>
      <div className='filter-container'>
        <div className='wrapper'>
          <FilterScroll filters={getFiltersI()} />
          <div>filter</div>
        </div>
        <div className='stay-index'>
          <StayList stays={stays} onStayClick={onStayClick} />
        </div>
      </div>
    </section>
  )
}
