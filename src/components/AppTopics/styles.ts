import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 24px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h6 {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.textDark600};
    font-weight: 700;
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.textDark600};
  margin-left: 14px;
  font-size: 1.1rem;
  padding: 6px 0;
`
export const Platform = styled.p`
  color: ${props => props.theme.colors.orange700};
  margin-left: 14px;
  font-size: 0.9rem;
`
export const Mark = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${props => props.theme.colors.textDark600};
  border-radius: 50%;
  margin-right: 8px;
`
