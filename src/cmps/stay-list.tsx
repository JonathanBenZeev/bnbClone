import { FC } from 'react'
import { ImagGallery } from './imag-gallery'
import { IStayPreview } from '../interfaces/stay'
import {StayPreview} from './stay-preview'
interface StayListProps {
  stays: IStayPreview[]
}

export const StayList: FC<StayListProps> = ({ stays }): JSX.Element => {
  return <section className='stay-list'>
    { stays.map(stay=><StayPreview key={stay._id}  stay={stay}/>)}
  </section>
}
