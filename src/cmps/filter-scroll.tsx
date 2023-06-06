import { FC, useEffect, useRef, useState } from 'react'
import { IFilter } from '../interfaces/filter'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

interface Props {
  filters: IFilter[]
 
}

export function FilterScroll({ filters }: Props): JSX.Element {
  const filterItemsRef = useRef<HTMLDivElement>(null)
  const elFilterPreview = useRef<HTMLDivElement>(null)
  const [scrollStart, setScrollStart] = useState(true)
  const [scrollEnd, setScrollEnd] = useState(false)

  useEffect(() => {
    const elFilter = filterItemsRef.current
    if (!elFilter) return
    elFilter.addEventListener('scroll', handleScroll)

    return () => {
      elFilter.removeEventListener('scroll', handleScroll)
    }
  }, [filterItemsRef.current?.scrollLeft])

  const handleScroll = () => {
    if (!filterItemsRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = filterItemsRef.current
    setScrollEnd(
      Math.round(scrollLeft) === Math.round(scrollWidth - clientWidth)
    )
    setScrollStart(scrollLeft === 0)
  }

  const onSelectFilter = (filterId:string) => {
     
  }

  const onScrollFilterSlide = (diff: number) => {
    if (filterItemsRef.current) {
      filterItemsRef.current.scrollLeft +=
        diff * 0.5 * filterItemsRef.current.clientWidth
    }
  }

  return (
    <section className='filter-scroll'>
      <button
        className={`scroll-btn ${scrollStart ? 'hidden' : ''} `}
        onClick={() => onScrollFilterSlide(-1)}
      >
        <FaChevronLeft size={'.75rem'} />
      </button>
      <div className='filter-item-list flex' ref={filterItemsRef}>
        {filters.map((filter) => (
          <div
            className='filter-preview flex column'
            key={filter._id}
            ref={elFilterPreview}
            onClick={() => onSelectFilter(filter._id)}
          >
            <img src={filter.img} alt={filter.title} />
            <p>{filter.title}</p>
          </div>
        ))}
      </div>
      <button
        className={`scroll-btn ${scrollEnd ? 'hidden' : ''} `}
        onClick={() => onScrollFilterSlide(1)}
      >
        <FaChevronRight size={'.75rem'} />
      </button>
    </section>
  )
}
