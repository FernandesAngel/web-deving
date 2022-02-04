import { Button } from '../Button'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import { SlideProps } from './interfaces'
import * as S from './styles'

export function Slide({
  title,
  description,
  titleButton
}: SlideProps): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <S.Content>
          <S.InfoContainer>
            <Title>
              <h3>{title}</h3>
            </Title>
            <p>{description}</p>
            <S.ButtonContainer>
              <Button title={titleButton} />
            </S.ButtonContainer>
          </S.InfoContainer>
          <S.ImageContainer>
            <img src="/draw.png" alt="" />
          </S.ImageContainer>
        </S.Content>
      </WrapperCenter>
    </S.Container>
  )
}
