import { Slide } from '../Slide'
import { slidesSectionData } from './slidesSectionData'
import * as S from './styles'

export function SlidesSection(): JSX.Element {
  return (
    <S.Container>
      {slidesSectionData.map(slide => (
        <Slide
          key={slide.id}
          title={slide.title}
          titleButton={slide.titleButton}
          description={slide.description}
        />
      ))}
    </S.Container>
  )
}
