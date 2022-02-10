import { Slide } from '../Slide'
import { slidesSectionData } from './slidesSectionData'
import * as S from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
export function SlidesSection(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }
  return (
    <S.Container>
      <Slider {...settings}>
        {slidesSectionData.map(slide => (
          <Slide
            key={slide.id}
            title={slide.title}
            titleButton={slide.titleButton}
            description={slide.description}
          />
        ))}
      </Slider>
    </S.Container>
  )
}
