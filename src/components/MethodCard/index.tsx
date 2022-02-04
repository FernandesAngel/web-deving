import { MethdoCardProps } from './interfaces'
import * as S from './styles'

export function MethodCard({
  image,
  title,
  description
}: MethdoCardProps): JSX.Element {
  return (
    <S.Container>
      <img src={image} />
      <h4>{title}</h4>
      <p>{description}</p>
    </S.Container>
  )
}
