import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: box-shadow 0.4s;
  :hover {
    box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.colors.backgroundSecondary};
  }
`
export const ContainerImage = styled.div`
  margin-right: 80px;

  @media (max-width: 800px) {
    margin-right: 32px;
  }
`
export const ContainerButton = styled.div`
  width: 24%;
  height: 32px;

  bottom: 0;
  left: 0;

  @media (max-width: 800px) {
    width: 40%;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0;
  justify-content: space-between;

  h3 {
    color: ${props => props.theme.colors.textDark700};
    font-size: 1.9rem;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }
  p {
    color: ${props => props.theme.colors.textDark600};
    font-size: 1.1rem;
    width: 60%;

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`
