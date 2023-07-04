import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

interface Props {
  imgs: {
    id: number
    img_url: string
  }[]
}

export const ImagGallery = ({ imgs }: Props) => {
  const [imgToShow, setImgToShow] = useState(1)
  const galleryRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const elGallery = galleryRef.current
  //   // if (!elGallery) return
  //   // elGallery.addEventListener('scroll', handleScroll)

  //   // return () => {
  //   //   elGallery.removeEventListener('scroll', handleScroll)
  //   // }
  // }, [galleryRef.current?.scrollLeft])

  const onChangePic = (ev: React.MouseEvent<HTMLElement>, diff: number) => {
    console.log('fff')

    ev.stopPropagation()
    if (imgToShow === imgs.length && diff === 1) {
      setImgToShow(imgs.length)
      return
    }

    if (imgToShow === 1 && diff === -1) {
      setImgToShow(1)
      return
    }
    setImgToShow((prevImgToShow) => (prevImgToShow += diff))
    onScrollGallery(diff)
  }

  const handleScroll = () => {
    if (!galleryRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current
    console.log(scrollLeft, scrollWidth, clientWidth)
  }

  const onScrollGallery = (diff: number) => {
    if (galleryRef.current) {
      console.log(diff)
      galleryRef.current.scrollLeft += diff * galleryRef.current.clientWidth
    }
  }

  const getImgById = (id: number) => {
    const { img_url } = imgs.filter((img) => img.id === id)[0]
    console.log(img_url)

    return img_url
  }

 

  return (
    <>
      <div className='gallery-test'>
        <div className='img-container' ref={galleryRef}>
          {imgs.map((img) => (
            <img src={img.img_url} alt='' key={img.id} />
          ))}
        </div>

        <section className='pos-container'>
          <div className='btn-container'>
            <button
              className={`arow-btn left ${imgToShow > 1 ? '' : 'hide'} `}
              onClick={(ev) => onChangePic(ev, -1)}
            >
              <span className='left-sp'>
                <RiArrowLeftSLine />
              </span>
            </button>
            <button
              className={`arow-btn right ${
                imgToShow === imgs.length ? 'hide' : ''
              } `}
              onClick={(ev) => onChangePic(ev, 1)}
            >
              <span className='right-sp'>
                <RiArrowRightSLine />
              </span>
            </button>
          </div>
        </section>
        <div className='img-selection'>
          {imgs.map((img) => (
            <div
              key={img.id}
              className={`sign ${img.id === imgToShow ? 'bold' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
  // return (
  //   <div
  //     className='gallery'
  //     style={{
  //       background: `url(${getImgById(imgToShow)})center center / cover  `,
  //     }}
  //   >
  // <div className='btn-container'>
  //   <button
  //     className={`arow-btn left ${imgToShow > 1 ? '' : 'hide'} `}
  //     onClick={(ev) => onChangePic(ev, -1)}
  //   >
  //     <span className='left-sp'>
  //       <RiArrowLeftSLine />
  //     </span>
  //   </button>
  //   <button
  //     className={`arow-btn right ${
  //       imgToShow === imgs.length ? 'hide' : ''
  //     } `}
  //     onClick={(ev) => onChangePic(ev, 1)}
  //   >
  //     <span className='right-sp'>
  //       <RiArrowRightSLine />
  //     </span>
  //   </button>
  // </div>
  // <div className='img-selction'>
  //   {imgs.map((img) => (
  //     <div
  //       key={img.id}
  //       className={`sign ${img.id === imgToShow ? 'bold' : ''}`}
  //     ></div>
  //   ))}
  // </div>
  //   </div>
  // )
}
