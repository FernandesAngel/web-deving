import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    max-width: 860px;
  }
  @media (max-width: 800px) {
    max-width: 640px;
  }
`
