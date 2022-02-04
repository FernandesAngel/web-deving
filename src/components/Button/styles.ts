import styled from 'styled-components'
import { shade } from 'polished'

interface PropsButton {
  bg: 'primary' | 'secondary'
}
export const Container = styled.button<PropsButton>`
  background-color: ${props =>
    props.bg === 'primary'
      ? props.theme.colors.orange700
      : props.theme.colors.backgroundSecondary};
  color: ${props =>
    props.bg === 'primary'
      ? props.theme.colors.backgroundSecondary
      : props.theme.colors.textDark800};

  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 1.25rem;
  font-weight: 700;
  transition: background-color 0.2s;
  :hover {
    background-color: ${shade(0.2, '#fff')};
    background-color: ${props =>
      props.bg === 'primary'
        ? shade(0.2, props.theme.colors.orange700)
        : shade(0.2, props.theme.colors.backgroundSecondary)};
  }
`
