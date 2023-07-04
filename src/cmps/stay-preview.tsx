// import ImageGallery from 'react-image-gallery'
import { FC } from 'react'
import { ImagGallery } from './imag-gallery'
import { IStayPreview } from '../interfaces/stay'
import { ImgCarousel } from './img-carousel'

interface StayPreviewProps {
  stay: IStayPreview
  onStayClick: (stayId: string) => void
}

export const StayPreview: FC<StayPreviewProps> = ({ stay ,onStayClick}): JSX.Element => {
  function getImgsForGallery(imgsUrl: string[]) {
    var id = 1
    return imgsUrl?.map((img) => ({ img_url: img, id: id++ }))
  }

  return (
    <div className='stay-preview' onClick={() => onStayClick(stay._id)}>
      {/* <ImagGallery imgs={getImgsForGallery(stay?.imgUrls)} /> */}
      <ImgCarousel imgUrls={stay?.imgUrls}/>
      <h5>
        {stay.loc.city} , {stay.loc.country}
      </h5>
      <p className='type'>{stay.type}</p>
      {/* <p>{stay.filters}</p> */}
    </div>
  )
}
