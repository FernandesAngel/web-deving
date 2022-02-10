import styled from 'styled-components'

export const Container = styled.div`
  padding: 48px 0;
`
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const BoxTitleButton = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 2.3rem;
    color: ${props => props.theme.colors.textDark700};
  }
`

export const BoxButton = styled.div``

interface ButtonProps {
  isMargin: boolean
  active: boolean
}
export const Button = styled.button<ButtonProps>`
  height: 32px;
  width: 32px;
  border: 0;
  border-radius: 5px;
  margin-left: ${props => (props.isMargin ? 16 : 0)}px;
  outline: none;
  background: ${props =>
    props.active
      ? props.theme.colors.orange900
      : props.theme.colors.textDark400};
  color: ${props =>
    props.active
      ? props.theme.colors.backgroundSecondary
      : props.theme.colors.textDark};
`
export const ContentForm = styled.div`
  flex-basis: 48%;
`
export const Info = styled.div`
  flex-basis: 48%;
  box-shadow: 20px 40px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 48px;
`
export const InfoHeader = styled.div`
  background: ${props => props.theme.colors.textDark400};
  padding: 10px 18px;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: row;
  .danger {
    background: ${props => props.theme.colors.danger};
  }
  .warning {
    background: ${props => props.theme.colors.warning};
  }
  .success {
    background: ${props => props.theme.colors.success};
  }
`
export const Mark = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 5px;
`

export const InfoContainer = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  height: 100%;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const InfoContent = styled.div`
  padding: 12px 24px 24px;
  p {
    color: ${props => props.theme.colors.textDark600};
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
`

export const InfoContentButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  button {
    height: 60px;
    width: 40%;
    border: 0;
    background-color: ${props => props.theme.colors.orange900};
    font-weight: 700;
    color: ${props => props.theme.colors.textWhite};
    font-size: 1.1rem;
    text-align: start;
    padding-left: 12px;
  }
`

export const Contact = styled.div`
  padding: 0 24px;
  p {
    color: ${props => props.theme.colors.textDark600};
    margin-bottom: 2px;
    font-size: 0.9rem;
  }
`
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
export const ContainerInput = styled.div`
  flex-basis: 48%;
`
