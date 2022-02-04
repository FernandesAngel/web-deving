import { MenuTopicProps } from './interfaces'
import * as S from './styles'

export function MenuTopic({
  title,
  topics,
  ...rest
}: MenuTopicProps): JSX.Element {
  return (
    <S.Container>
      <h1>{title}</h1>

      {topics.map(t => (
        <S.TopicContainer key={t} type="button" {...rest}>
          <S.Mark />
          <p>{t}</p>
        </S.TopicContainer>
      ))}
    </S.Container>
  )
}
