import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 540px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`
export const InfoContainer = styled.div`
  margin-right: 240px;
  padding-top: 32px;
  @media (max-width: 860px) {
    margin-right: 80px;
  }

  @media (max-width: 540px) {
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  p {
    padding: 24px 0;
    width: 100%;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textDark600};
    @media (max-width: 540px) {
      text-align: center;
    }
  }
`
export const ButtonContainer = styled.div`
  height: 40px;
  @media (max-width: 540px) {
    width: 100%;
  }
`
export const ImageContainer = styled.div``
