import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 80px;
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 40px;
  justify-content: flex-start;

  h2 {
    flex-basis: 30%;
    margin-right: 120px;
  }

  p {
    flex-basis: 40%;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textDark600};
    a {
      font-weight: 700;
    }
  }
`
