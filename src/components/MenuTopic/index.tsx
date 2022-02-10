import { MenuTopicProps } from './interfaces'
import * as S from './styles'

export function MenuTopic({ topic, ...rest }: MenuTopicProps): JSX.Element {
  return (
    <S.Container>
      <S.TopicContainer type="button" {...rest}>
        <S.Mark />
        <p>{topic}</p>
      </S.TopicContainer>
    </S.Container>
  )
}
