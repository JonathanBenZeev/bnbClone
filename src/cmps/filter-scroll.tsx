import { FC } from 'react'
import { IFilter } from '../interfaces/filter'

interface Props {
  filters: IFilter[]
}

export function FilterScroll({ filters }: Props): JSX.Element {
   


  return (
    <section className='filter-scroll '>
     <div className="filter-item-list flex"> 
      {filters.map((filter) => (
        <div className='filter-preview flex column ' id={filter._id}>
          <img src={filter.img} alt={filter.title} />
          <p>{filter.title}</p>
        </div>
      ))}
      </div>
    </section>
  )
}
