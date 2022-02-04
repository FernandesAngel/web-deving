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
`
export const Title = styled.div`
  h5 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1rem;
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
