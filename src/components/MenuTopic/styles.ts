import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: 1.6rem;
    margin: 40px 0 10px;
    font-weight: 700;
  }
`
export const TopicContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 8px;
  border: 0;
  outline: none;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  p {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.textDark600};
    :hover {
      color: ${shade(0.4, '#7A7A7A')};
    }
  }
`

export const Mark = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${props => props.theme.colors.textDark600};
  border-radius: 50%;
  margin-right: 8px;
`
