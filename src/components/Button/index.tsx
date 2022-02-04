import { ButtonProps } from './interfaces'
import * as S from './styles'

export function Button({
  title,
  bg = 'primary',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <S.Container bg={bg} {...rest}>
      {title}
    </S.Container>
  )
}
