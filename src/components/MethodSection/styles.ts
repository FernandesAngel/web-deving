import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
  background-color: ${props => props.theme.colors.backgroundTertiary};
  min-height: 800px;
  background-image: url('/doctor.png');
  background-repeat: no-repeat;
  background-size: 42%;
  background-position: right bottom 38px;
  padding: 40px 0;
`
export const TitleContainer = styled.div``
export const ContainerButton = styled.div`
  width: 40%;
  height: 40px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  p {
    height: 120px;
    width: 40%;
    margin-right: 120px;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textDark600};
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
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
`
