import styled from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.colors.backgroundSecondary};
`
export const ContentTop = styled.div`
  background: ${props => props.theme.colors.backgroundDark};
  padding: 48px 0;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
export const Title = styled.div`
  @media (max-width: 640px) {
    margin-right: 32px;
  }
  @media (max-width: 540px) {
    margin: 0;
  }
  h5 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  p {
    font-size: 1rem;
    @media (max-width: 540px) {
      margin-bottom: 24px;
    }
    a {
      color: ${props => props.theme.colors.textBlue};
    }
  }
`
export const ImageContainer = styled.div``
export const ContentBottom = styled.div`
  background: ${props => props.theme.colors.textDark};
  padding: 16px 0;
`
