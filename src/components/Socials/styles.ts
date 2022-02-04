import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.orange900};
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 72px 0;
  justify-content: space-around;
`
export const TitleContainer = styled.div`
  color: ${props => props.theme.colors.backgroundSecondary};

  h3 {
    font-size: 2.6rem;
    margin-bottom: 16px;
  }
  p {
    font-size: 1.1rem;
  }
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Social = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 24px;
`
