import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
  background-color: ${props => props.theme.colors.backgroundTertiary};
  padding: 40px 0;
`
export const TitleContainer = styled.div`
  h3 {
    @media (max-width: 540px) {
      text-align: center;
    }
  }
`
export const ContainerButton = styled.div`
  width: 40%;
  height: 40px;
  @media (max-width: 540px) {
    width: 100%;
    margin: 20px 0;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
  width: 100%;
  p {
    width: 100%;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textDark600};
    @media (max-width: 540px) {
      text-align: center;
      margin: 0;
    }
  }
`

export const MethodContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0px 50px 30px 1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 16px;
  @media (max-width: 480px) {
    padding: 20px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`
