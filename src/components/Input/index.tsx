import { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputProps } from './interfaces'
import * as S from './styles'

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, label, ...rest }: InputProps,
  ref
) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <input ref={ref} {...rest} />
      <S.Error>
        <p>{error}</p>
      </S.Error>
    </S.Container>
  )
}

export const Input = forwardRef(InputBase)
