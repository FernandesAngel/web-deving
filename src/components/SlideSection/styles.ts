import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0 16px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const InfoContainer = styled.div`
  margin-right: 240px;
  padding-top: 32px;
  p {
    padding: 24px 0;
    width: 100%;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textDark600};
  }
`
export const ButtonContainer = styled.div`
  height: 40px;
`
export const ImageContainer = styled.div``
