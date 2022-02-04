import { Button } from '../Button'
import { ServiceCardProps } from './interfaces'
import * as S from './styles'

export function ServiceCard({
  image,
  title,
  subtitle
}: ServiceCardProps): JSX.Element {
  return (
    <S.Container>
      <S.ContainerImage>
        <img src={image} />
      </S.ContainerImage>
      <S.Content>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <S.ContainerButton>
          <Button title="Mais Serviços" />
        </S.ContainerButton>
      </S.Content>
    </S.Container>
  )
}
