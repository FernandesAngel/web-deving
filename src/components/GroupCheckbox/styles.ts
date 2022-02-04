import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 15px;
`
export const Label = styled.span`
  display: block;
  color: ${props => props.theme.colors.orange700};
  font-size: 1rem;
  font-weight: 700;
`

export const Content = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const Error = styled.div`
  min-height: 16px;
  p {
    color: ${props => props.theme.colors.danger};
    font-size: 0.9rem;
  }
`
