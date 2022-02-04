import styled from 'styled-components'

export const Container = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2.3rem;
    color: ${props => props.theme.colors.orange700};
    font-weight: 700;
  }
`
