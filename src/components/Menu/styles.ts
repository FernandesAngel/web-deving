import styled from 'styled-components'
export const Container = styled.div`
  position: absolute;
  top: 0;
  /* right: -222px; */
  right: 0;
  z-index: 5;
`
export const Menu = styled.div`
  width: 216px;
  height: 640px;
  background: ${props => props.theme.colors.backgroundSecondary};
  position: relative;

  &:after {
    content: '';
    background: ${props => props.theme.colors.backgroundSecondary};
    width: 100%;
    height: 640px;
    position: absolute;
    top: 0;
    left: -216px;
    clip-path: polygon(93% 50%, 100% 100%, 100% 0);
  }
`
export const BtnMenu = styled.button`
  border: 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  width: 86px;
  height: 36px;
  border-bottom-left-radius: 24px;
  border-top-left-radius: 24px;
  position: absolute;
  top: 302px;
  left: -86px;
  z-index: 1000;
  outline: none;

  svg {
    position: absolute;
    left: 15px;
    top: 7px;
    z-index: 1000;
  }

  &:before {
    content: '';
    position: absolute;
    background: transparent;
    bottom: -50px;
    right: 10px;
    height: 50px;
    width: 40px;
    border-top-right-radius: 190px;
    box-shadow: 0 -25px 0 0 ${props => props.theme.colors.backgroundSecondary};
  }

  &:after {
    content: '';
    position: absolute;
    background: transparent;
    bottom: 36px;
    right: 10px;
    height: 50px;
    width: 40px;
    border-top-right-radius: 190px;
    box-shadow: 0 -25px 0 0 ${props => props.theme.colors.backgroundSecondary};
    transform: rotateX(180deg);
  }
`
export const Content = styled.div`
  padding: 20px;
`
export const ContainerLogo = styled.div`
  margin-bottom: 20px;
`
export const Contacts = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;

  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 24px;
  }
`
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const SocialCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.textDark600};
  margin: 10px 5px;
`
