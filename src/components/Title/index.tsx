import { TitleProps } from './interfaces'
import * as S from './styles'

export function Title({ children }: TitleProps): JSX.Element {
  return <S.Container>{children}</S.Container>
}
