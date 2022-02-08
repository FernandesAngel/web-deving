import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    max-width: 860px;
  }
  @media (max-width: 860px) {
    max-width: 640px;
  }
  @media (max-width: 640px) {
    max-width: 520px;
  }
  @media (max-width: 540px) {
    max-width: 460px;
  }
  @media (max-width: 480px) {
    max-width: 375px;
  }
`
