import { CheckboxProps } from './interfaces'
import * as S from './styles'
import { AiOutlineCheck } from 'react-icons/ai'
import { useTheme } from 'styled-components'

export function Checkbox({
  label,
  checked,
  ...rest
}: CheckboxProps): JSX.Element {
  const { colors } = useTheme()
  return (
    <S.Container {...rest} type="button">
      <div>
        {checked && <AiOutlineCheck size={16} color={colors.textDark800} />}
      </div>
      <span>{label}</span>
    </S.Container>
  )
}
