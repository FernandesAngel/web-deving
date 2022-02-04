import styled from 'styled-components'

export const Container = styled.article`
  padding: 24px 16px;
  margin: 8px;
  width: 100%;
  border-radius: 10px;
  transition: box-shadow 0.4s;

  h4 {
    color: ${props => props.theme.colors.textDark700};
    font-size: 1.7rem;
    margin: 8px 0;
  }

  p {
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textDark600};
  }

  :hover {
    box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.05);
    background: rgba(247, 247, 247, 0.6);
  }
`
