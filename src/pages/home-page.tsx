import { FC, useEffect } from 'react'
import { FilterScroll } from '../cmps/filter-scroll'
import { getFiltersI } from '../services/stay.service'
import { StayList } from '../cmps/stay-list'
import { query } from '../services/stay.service'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { loadStays } from '../store/stay/stay.actions'

export const HomePage: FC = (): JSX.Element => {
  const { stays, isLoading } = useSelector(
    (storeState: RootState) => storeState.stayModule
  )

  useEffect(() => {
    loadStays()
  }, [])

  return (
    <section className='home-page'>
      <div className='filter-container'>
        <div className='wrapper'>
          <FilterScroll filters={getFiltersI()} />
          <div>filter</div>
        </div>
        <div className='stay-index'>
          <StayList stays={stays}/>
        </div>
      </div>
    </section>
  )
}
