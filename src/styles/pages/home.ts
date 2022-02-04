import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`
export const ContainerHeader = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(165deg, #ffc42e 0%, #ff3d00 65%);
  position: relative;
  margin-bottom: 70px;

  &:before {
    content: '';
    background: #ff3d00;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -50px;
    z-index: -1;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`
export const Content = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.textWhite};
    margin-top: 0px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
