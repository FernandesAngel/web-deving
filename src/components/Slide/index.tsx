import { useRouter } from 'next/router'
import { Button } from '../Button'
import { Title } from '../Title'
import { WrapperCenter } from '../WrapperCenter'
import { SlideProps } from './interfaces'
import * as S from './styles'

export function Slide({
  title,
  description,
  titleButton,
  linkButton
}: SlideProps): JSX.Element {
  const route = useRouter()
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
              <Button
                title={titleButton}
                onClick={() => route.push(`#${linkButton}`)}
              />
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
