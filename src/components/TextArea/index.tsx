import { forwardRef, ForwardRefRenderFunction } from 'react'
import { TextAreaProps } from './interfaces'
import * as S from './styles'

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ error, label, ...rest }: TextAreaProps, ref) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <textarea ref={ref} {...rest} rows={8} />
      <S.Error>
        <p>{error}</p>
      </S.Error>
    </S.Container>
  )
}

export const TextArea = forwardRef(TextAreaBase)
