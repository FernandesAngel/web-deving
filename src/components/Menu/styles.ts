import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}
export const Container = styled.nav<ContainerProps>`
  position: fixed;

  top: 0;
  /* right: -222px; */
  right: 0;
  z-index: 5;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(222px)')};
  transition: transform 0.3s ease-in-out;
  background-color: green;
  /* @media (max-width: 480px) {
    position: fixed;
  } */
`
export const Menu = styled.div`
  width: 216px;
  height: 100vh;
  background: ${props => props.theme.colors.backgroundSecondary};
  position: relative;

  &:after {
    content: '';
    background: ${props => props.theme.colors.backgroundSecondary};
    width: 100%;
    height: 100vh;
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
  top: 45vh;
  left: -86px;
  z-index: 1000;
  outline: none;

  @media (max-width: 540px) {
    width: 68px;
    left: -70px;
  }
  @media (max-width: 375px) {
    width: 56px;
    left: -57px;
  }

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

    @media (max-width: 540px) {
      width: 30px;
    }
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
    @media (max-width: 540px) {
      width: 30px;
    }
  }
`
export const Content = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContentTopics = styled.div`
  h1 {
    font-size: 1.6rem;
    margin: 40px 0 10px;
    font-weight: 700;
  }
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
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`
