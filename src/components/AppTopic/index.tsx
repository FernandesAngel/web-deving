import { AppTopicProps } from './interfaces'
import * as S from './styles'

export function AppTopic({
  title,
  description,
  type
}: AppTopicProps): JSX.Element {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Mark />
        <h6>{title}</h6>
      </S.TitleContainer>
      <S.Description>{description}</S.Description>
      <S.Platform>{type}</S.Platform>
    </S.Container>
  )
}
