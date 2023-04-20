import { FC } from 'react'
import { FilterScroll } from '../cmps/filter-scroll'
import { getFiltersI } from '../services/stay.service'

export const HomePage: FC = (): JSX.Element => {
  return (
    <section className='home-page'>
      <div className='filter-container'>
        <div className='wrapper'>
          <FilterScroll filters={getFiltersI()} />
          <div>filter</div>
        </div>
      </div>
    </section>
  )
}
