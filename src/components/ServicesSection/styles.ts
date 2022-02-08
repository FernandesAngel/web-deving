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

  @media (max-width: 860px) {
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    flex-basis: 30%;
    margin-right: 120px;
    @media (max-width: 860px) {
      margin-right: 40px;
    }
    @media (max-width: 640px) {
      margin-bottom: 24px;
    }
  }

  p {
    flex-basis: 40%;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textDark600};
    @media (max-width: 860px) {
      flex-basis: 55%;
    }
    a {
      font-weight: 700;
    }
  }
`
