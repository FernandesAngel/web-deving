import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  min-height: 656px;
  background: linear-gradient(
    165deg,
    ${props => props.theme.colors.orange200} 0%,
    ${props => props.theme.colors.orange800} 65%
  );
  position: relative;
  margin-bottom: 70px;

  &:before {
    content: '';
    background: ${props => props.theme.colors.orange800};
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -50px;
    z-index: -1;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`
export const ContainerLogo = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0;

  color: ${props => props.theme.colors.textWhite};

  p {
    text-align: center;
    font-size: 0.9rem;
  }

  h1 {
    font-weight: 700;
    font-size: 3.2rem;
    text-align: center;
    margin-top: 180px;

    span {
      display: block;
      color: ${props => props.theme.colors.textWhiteLight};
      font-size: 1.7rem;
    }
  }

  .subtitleText {
    font-size: 16px;
    margin: 48px 0;
  }

  .quoteText {
    font-size: 12px;
    margin: 48px 0 48px;

    a {
      font-weight: 700;
    }
  }
`
export const ContainerButton = styled.div`
  width: 16%;
  height: 44px;

  @media (max-width: 800px) {
    width: 24%;
  }
`
