import { WrapperCenter } from '../WrapperCenter'
import * as S from './styles'

export function Socials(): JSX.Element {
  return (
    <S.Container>
      <WrapperCenter>
        <S.Content>
          <S.TitleContainer>
            <h3>
              Saiba mais em <br /> nossas redes sociais
            </h3>
            <p>Casos de sucesso, soluções inovadoras e informação</p>
          </S.TitleContainer>
          <S.SocialContainer>
            <S.Social />
            <S.Social />
            <S.Social />
            <S.Social />
          </S.SocialContainer>
        </S.Content>
      </WrapperCenter>
    </S.Container>
  )
}
