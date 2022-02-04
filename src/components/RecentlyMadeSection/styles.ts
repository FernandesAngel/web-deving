import styled from 'styled-components'

export const Container = styled.section`
  padding-bottom: 40px;
`
export const TopicsContainer = styled.div`
  width: 100%;
  padding: 40px 56px;
`
export const Depo = styled.div`
  display: flex;
  flex-direction: row;
`
export const DepoTitle = styled.div`
  flex-basis: 40%;
  margin-right: 80px;
  @media (max-width: 800px) {
    margin-right: 32px;
    flex-basis: 42%;
  }
  h5 {
    color: ${props => props.theme.colors.orange700};
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    color: ${props => props.theme.colors.textDark600};
    font-size: 1.1rem;
    margin-top: 24px;
  }
`
export const DepoCard = styled.div`
  flex-basis: 60%;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundSecondary};
  padding: 40px;
  height: 100%;
  border-radius: 16px;
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.05);
  @media (max-width: 800px) {
    padding: 24px;
  }
`
export const DepoContent = styled.p`
  color: ${props => props.theme.colors.textDark600};
  font-size: 1.1rem;
`
export const DepoIdentification = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  text-align: start;
  color: ${props => props.theme.colors.textDark700};

  .name {
    font-weight: 700;
  }
  .company {
    font-weight: 400;
  }
`
export const DepoIdentificationContent = styled.div``
export const FakeDepoIdentificationContent = styled.div`
  flex: 1;
`

export const MoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  a {
    color: ${props => props.theme.colors.orange700};
    font-weight: 700;
    margin: 0 20px;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
      width: 32%;
    }
  }
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.colors.backgroundDark};
`
