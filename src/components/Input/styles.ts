import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 15px;
  input {
    height: 32px;
    padding: 5px;
    color: ${props => props.theme.colors.textDark800};
    width: 100%;
    border: 0;
    outline: none;
    border-bottom: 1.5px solid #cdcdcd;
    background: ${props => props.theme.colors.background};

    ::placeholder {
      color: green;
    }
  }
`
export const Label = styled.span`
  display: block;
  color: ${props => props.theme.colors.orange700};
  font-size: 1rem;
  font-weight: 700;
`
export const Error = styled.div`
  min-height: 16px;
  p {
    color: ${props => props.theme.colors.danger};
    font-size: 0.9rem;
  }
`
