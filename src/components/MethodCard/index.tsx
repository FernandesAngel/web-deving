import { MethodCardProps } from './interfaces'
import * as S from './styles'

export function MethodCard({
  image,
  title,
  description
}: MethodCardProps): JSX.Element {
  return (
    <S.Container>
      <img src={image} />
      <h4>{title}</h4>
      <p>{description}</p>
    </S.Container>
  )
}
