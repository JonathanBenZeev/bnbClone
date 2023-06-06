// import ImageGallery from 'react-image-gallery'
import { FC } from 'react'
import { ImagGallery } from './imag-gallery'
import { IStayPreview } from '../interfaces/stay'

interface StayPreviewProps {
  stay: IStayPreview 
}

export const StayPreview: FC<StayPreviewProps> = ({ stay }): JSX.Element => {
  function getImgsForGallery(imgsUrl: string[]) {
    var id = 1
    return imgsUrl?.map((img) => ({ img_url: img, id: id++ }))
  }

  return (
    <section className='stay-preview'>
      <ImagGallery imgs={getImgsForGallery(stay?.imgUrls)} />
    </section>
  )
}
