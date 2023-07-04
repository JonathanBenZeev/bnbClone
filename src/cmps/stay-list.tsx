import { FC } from 'react'
import { ImagGallery } from './imag-gallery'
import { IStayPreview } from '../interfaces/stay'
import {StayPreview} from './stay-preview'
interface StayListProps {
  stays: IStayPreview[]
  onStayClick: (stayId: string) => void
}

export const StayList: FC<StayListProps> = ({ stays,onStayClick }): JSX.Element => {
  return <section className='stay-list'>
    { stays.map(stay=><StayPreview key={stay._id}  stay={stay} onStayClick={onStayClick} />)}
  </section>
}
