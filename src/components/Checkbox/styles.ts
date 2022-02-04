import styled from 'styled-components'

export const Container = styled.button`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;

  div {
    border: 1px solid ${props => props.theme.colors.orange700};
    border-radius: 4px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
  span {
    color: ${props => props.theme.colors.orange700};
    font-size: 1rem;
  }
`
