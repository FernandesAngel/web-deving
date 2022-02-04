import { WrapperCenterProps } from './interfaces'
import * as S from './styles'

export function WrapperCenter({ children }: WrapperCenterProps): JSX.Element {
  return <S.Container>{children}</S.Container>
}
