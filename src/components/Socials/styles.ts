import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.orange900};
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 72px 0;
  justify-content: space-around;

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 64px 0;
  }
`
export const TitleContainer = styled.div`
  color: ${props => props.theme.colors.backgroundSecondary};

  @media (max-width: 540px) {
    margin-bottom: 24px;
  }

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
  @media (max-width: 540px) {
    width: 56%;
    justify-content: space-between;
  }
`
export const Social = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    margin: 0;
  }
`
